# Unified crochet pattern search backend

The Crochet Corner already searches a single same-page catalog drawn from Ravelry, Yarnspirations, LoveCrafts, and AllFreeCrochet. Results can be filtered by project category and source, then opened on the original site. When a server endpoint is configured, the same interface adds live results and falls back to the local catalog if the endpoint is unavailable.

A GitHub Pages browser should not scrape those sites directly: cross-origin rules will often block it, credentials would be exposed, and each publisher has its own terms. Run aggregation in a serverless function and use each provider's approved API, feed, or search/index integration. Ravelry provides a [developer program](https://www.ravelry.com/pro/developer); verify permitted use and attribution before launch. The linked public collections remain useful fallbacks: [Yarnspirations](https://www.yarnspirations.com/collections/patterns), [LoveCrafts](https://www.lovecrafts.com/en-us/l/crochet/crochet-patterns/free-crochet-patterns), and [AllFreeCrochet](https://www.allfreecrochet.com/).

## Browser-to-backend contract

Create an HTTPS `GET` endpoint that accepts:

- `q`: free-text search
- `category`: `scarves`, `hats`, `lace`, `shirts`, `blouses`, `jackets`, or `amigurumi`
- `free=true`: mandatory for this interface
- `source`: optional provider name

Return:

```json
{
  "results": [
    {
      "id": "provider-stable-id",
      "title": "Pattern title",
      "url": "https://original-pattern-page.example/…",
      "source": "Provider name",
      "designer": "Designer name",
      "categories": ["hats"],
      "difficulty": "Easy",
      "description": "Short plain-text summary"
    }
  ]
}
```

The current frontend discards malformed entries and escapes displayed text. The server should still validate that `url` is an HTTPS URL on an allowed provider domain.

## Aggregator flow

1. Validate and cap `q` (for example, 100 characters); accept only known categories and sources.
2. Query provider integrations concurrently with short timeouts.
3. Normalize project categories and free/paid status. Exclude results whose free availability is ambiguous when `free=true`.
4. Canonicalize URLs, deduplicate by provider ID or canonical URL, and preserve the original designer and source attribution.
5. Rank exact title/category matches first while keeping a reasonable mix of sources.
6. Cache normalized results briefly, rate-limit by user/IP, and return partial results when one provider is unavailable.

For websites without an approved API or feed, use a compliant search provider restricted to the allowed domains or maintain a reviewed catalog. Do not bypass robots directives, access controls, or publisher terms.

## Connect it to Daylily

Deploy the function, allow the GitHub Pages origin in its CORS policy, and set the public URL in `config.js`:

```js
window.DAYLILY_CONFIG = {
  patternSearchEndpoint: "https://YOUR-PROJECT.supabase.co/functions/v1/pattern-search",
};
```

Do not put provider secrets in that file. Store them as serverless secrets. If your endpoint requires a signed-in user, extend `searchAllPatternSites()` in `app.js` to send the Supabase access token in an `Authorization` header.

## Recommended rollout

1. Launch the included curated cross-site index and direct provider-search fallbacks.
2. Add Ravelry through its approved developer access.
3. Add one compliant domain-search/index integration for the remaining sites.
4. Add monitoring for broken links, paid-status changes, duplicates, and providers that change their terms.

