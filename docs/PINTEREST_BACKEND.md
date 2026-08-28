# Pinterest account connection

Daylily can stay on GitHub Pages, but Pinterest OAuth must run through a trusted backend. A static page must never receive the Pinterest app secret, exchange authorization codes, or store user tokens. This guide uses Supabase Auth, Postgres, and Edge Functions; the same boundaries apply to Firebase, Cloudflare Workers, or another serverless backend.

Pinterest's current multi-user web flow is the [Authorization Code flow](https://developers.pinterest.com/docs/getting-started/set-up-authentication-and-authorization/). The Organic Content API documents the [board and pin scopes and endpoints](https://developers.pinterest.com/docs/work-with-organic-content-and-users/create-boards-and-pins/).

## 1. Create the two projects

1. Create a Supabase project and enable email confirmation under **Authentication → Providers → Email**.
2. Add the deployed GitHub Pages URL to the Supabase redirect allowlist—for example, `https://YOUR-NAME.github.io/CreativeCenter/`.
3. Create a Pinterest developer app and request the API access your use case needs.
4. In Pinterest, register this exact redirect URI, replacing the project reference:

   `https://YOUR-PROJECT-REF.supabase.co/functions/v1/pinterest-callback`

   The `redirect_uri` sent during authorization and token exchange must match it exactly.

5. Request only the scopes Daylily needs initially: `boards:read` and `pins:read`.

## 2. Store server secrets

Set these as Supabase Edge Function secrets—not in `config.js`, GitHub Actions logs, or browser storage:

```bash
supabase secrets set PINTEREST_APP_ID="..."
supabase secrets set PINTEREST_APP_SECRET="..."
supabase secrets set SITE_URL="https://YOUR-NAME.github.io/CreativeCenter/"
supabase secrets set PINTEREST_REDIRECT_URI="https://YOUR-PROJECT-REF.supabase.co/functions/v1/pinterest-callback"
```

The Supabase URL and public anon key may be used by the browser when Row Level Security is correctly enabled. The Pinterest secret, service-role key, access tokens, and refresh tokens are server-only.

## 3. Create the data model

Keep imported content separate from OAuth credentials. One minimal model is:

```sql
create table public.pinterest_integrations (
  user_id uuid primary key references auth.users(id) on delete cascade,
  pinterest_user_id text,
  access_token_ciphertext text not null,
  refresh_token_ciphertext text,
  expires_at timestamptz,
  updated_at timestamptz not null default now()
);

alter table public.pinterest_integrations enable row level security;
-- Do not add a browser-readable SELECT policy. Access this table only from
-- trusted functions using the service role, and return sanitized status data.

create table public.pinterest_oauth_states (
  state_hash text primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  expires_at timestamptz not null,
  used_at timestamptz
);

create table public.inspiration_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  source text not null,
  external_id text,
  title text,
  note text,
  image_url text,
  source_url text,
  created_at timestamptz not null default now(),
  unique (user_id, source, external_id)
);

alter table public.inspiration_items enable row level security;
create policy "users own inspiration" on public.inspiration_items
for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
```

Use a platform encryption facility or application-level authenticated encryption for token columns. Never return those columns to the browser.

## 4. Add five serverless endpoints

### `pinterest-connect`

1. Require a valid Supabase access token and resolve the signed-in user on the server.
2. Generate at least 32 random bytes for `state`; store only its hash with the user ID and a short expiry.
3. Return or redirect to `https://www.pinterest.com/oauth/` with:
   - `client_id=PINTEREST_APP_ID`
   - the exact `redirect_uri`
   - `response_type=code`
   - `scope=boards:read,pins:read`
   - the random `state`

### `pinterest-callback`

1. Reject missing, expired, reused, or mismatched `state`, then mark it used.
2. POST the returned code to `https://api.pinterest.com/v5/oauth/token` using HTTP Basic auth with the app ID and secret. Send form fields `grant_type=authorization_code`, `code`, and the exact `redirect_uri`.
3. Encrypt and store the access token, refresh token, expiry, and Pinterest user ID for the state owner.
4. Redirect to `SITE_URL#inspiration?connected=pinterest`. Do not place tokens in that URL.

### `pinterest-boards`

Require the user's session, load their token server-side, refresh it when needed, and proxy a normalized view of `GET /v5/boards`. Return only fields needed by the picker, plus Pinterest's pagination bookmark.

### `pinterest-pins`

Require the user's session and an authorized board ID, then proxy a normalized view of `GET /v5/boards/{board_id}/pins`. Validate every returned URL and preserve the original Pinterest link and attribution.

### `pinterest-disconnect`

Revoke the token when supported, then delete the stored integration and pending OAuth state. Make this available from account settings and include it in account deletion.

## 5. Wire Daylily's buttons

After adding Supabase Auth to the frontend, replace the current prototype-modal handler for `#connect-pinterest` and `#source-connect-pinterest` with:

1. Ask the user to sign in if there is no verified session.
2. Call `pinterest-connect` with `Authorization: Bearer SUPABASE_ACCESS_TOKEN`.
3. Navigate to the returned Pinterest authorization URL.
4. On return, show a board picker backed by `pinterest-boards`.
5. Let the user select pins, then insert normalized records into `inspiration_items` through an authenticated function or RLS-protected request.

Do not fetch Pinterest APIs directly from `app.js`; doing so would expose tokens and complicate CORS, refresh, and revocation.

## 6. Production checklist

- Use HTTPS and exact allowlisted redirects in both services.
- Bind `state` to the authenticated user, give it a short lifetime, and allow one use.
- Refresh tokens only on the server and rotate the stored refresh token if Pinterest returns a replacement.
- Add rate limiting, structured audit logs without tokens, pagination, retry limits, and graceful reconnect messages.
- Publish privacy, account-deletion, and data-retention pages before requesting app review.
- Test denied consent, expired codes, refresh failure, disconnected accounts, duplicate pin imports, and deleted Pinterest boards.
- Re-check Pinterest's official docs during implementation because approval requirements and token lifetimes can change.

