# Daylily

Daylily is a calm, local-first creative planning prototype designed to run directly on GitHub Pages. It combines a daily/weekly planner, an inspiration library, notes, calendar export, and whole-workspace visual themes without a build step.

## What works now

- Daily and weekly scheduling with browser persistence
- Pre-filled Google Calendar event links
- Standards-based `.ics` downloads for Apple Calendar and other calendar apps
- Inspiration collections, filters, saved items, and manual Pinterest/web links
- Notes, quick capture, search, profile preferences, and six global themes
- Custom accent colors, compact/cozy spacing, responsive mobile navigation
- All user-entered content is escaped before it is rendered

Open `index.html` directly or serve the folder locally:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Deploy to GitHub Pages

1. Create a GitHub repository and put these files on its default branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the default branch and the `/ (root)` folder, then save.

The app uses hash-based navigation, relative asset URLs, and no server routes, so it works from either a user site or a project site.

## Important prototype boundary

GitHub Pages serves static files. It cannot safely store OAuth client secrets, issue verification emails, or protect a multi-user database. The current profile is therefore clearly labeled as local-only, and Pinterest content is a realistic preview plus manual-link workflow—not a fake OAuth connection.

For production accounts and Pinterest imports, add a managed backend. A practical architecture is:

```text
GitHub Pages UI
    ├── Supabase/Firebase Auth → verified user session
    ├── Hosted database → events, notes, inspiration, preferences
    └── Serverless function → Pinterest OAuth + token-protected imports
```

### Suggested production path

1. Add Supabase Auth (or Firebase Auth) for email/password or magic-link sign-in and email verification.
2. Create per-user `profiles`, `events`, `notes`, `inspirations`, and `preferences` tables. Enable row-level access rules so each user can only read and edit their own records.
3. Register a Pinterest developer app. Put its client secret only in serverless-function secrets—never in this repository or browser JavaScript.
4. Add serverless endpoints for starting OAuth, handling the callback, refreshing/revoking tokens, listing boards, and importing selected pins.
5. Store Pinterest access tokens encrypted or in a managed secrets store. Save only normalized pin metadata and links in the user database.
6. Replace `localStorage` reads/writes in `app.js` with an authenticated data adapter, while retaining local preferences as an offline cache.

Google Calendar does not require account linking for the current flow: Daylily opens Google's standard event-creation URL. Apple Calendar receives an interoperable iCalendar file, which also works with many other calendar clients. If two-way calendar sync is needed later, add Google OAuth and CalDAV-compatible server integration separately.

## Project map

- `index.html` — accessible app structure and dialogs
- `styles.css` — responsive layouts and palette system
- `app.js` — state, persistence, planner, notes, themes, and calendar export
- `assets/` — lightweight local artwork and favicon

## Privacy notes for production

- Do not store passwords or OAuth secrets in `localStorage`.
- Do not put private API keys in GitHub Pages JavaScript. Public “anon” configuration values are only acceptable when the backend enforces authorization rules.
- Add account deletion, Pinterest disconnect/token revocation, data export, and a clear privacy policy before public launch.
- Validate and normalize imported URLs and remote image metadata on the server.

