# Install GDPR Toolkit cookie banner (Vite site)

You are working in a Vite + React/Vue/vanilla site. Install the GDPR Toolkit consent banner snippet. This is a one-file change.

## The snippet

```html
<script src="https://sbmesiotanujqjhlqzjk.supabase.co/storage/v1/object/public/cmp/v1/banner.js"
  data-gt-key="gdpr_live_bc998becffa65157031df39530a3c50247641fed7e58b9f7"
  data-gt-site="ef030e5b-be71-4bfd-b227-6dcfe47c451c"
  defer></script>
```

Do **not** modify `src`, `data-gt-key`, or `data-gt-site`. Do **not** change `defer` to `async` or remove it.

## Where to insert

Paste the snippet inside the `<head>` of `index.html` (at the project root, same folder as `vite.config.*`). Place it **near the top of `<head>`** — ideally right after `<meta charset>` and before any `<link>` or other `<script>` tags.

Why early: the snippet installs a script-blocker on `Node.prototype.appendChild` that must be in place before Google Analytics, Meta Pixel, or similar tags are parsed. Loading it last would let those tags slip through before blocking kicks in.

## What NOT to do

- Do not move it into a React/Vue component. `index.html` is correct; component-level injection happens after hydration, which is too late.
- Do not wrap it in a `useEffect` or `onMounted`.
- Do not route it through a tag manager.
- Do not strip `defer`.

## Verify

1. Run `npm run dev` (or `pnpm dev` / `yarn dev`).
2. Open the site in an incognito window.
3. Confirm a Czech consent banner appears at the bottom with three buttons: "Přijmout vše", "Odmítnout vše", "Nastavení".
4. Open DevTools → Application → Cookies. After clicking any button, `gdpr_consent` and `gdpr_vid` cookies should be set on the site's domain.
5. Network tab should show exactly one `GET` to `get-banner-config` (200) and one `POST` to `log-consent` (204) per decision.
6. Console must have zero errors originating from `banner.js`.

If the banner doesn't appear, check that:
- The snippet is in `index.html`, not in a component.
- Ad blockers aren't stripping the request (test in incognito without extensions).
- `data-gt-key` and `data-gt-site` are copied exactly, with no whitespace changes.

## Done

Commit the change as `feat: add gdpr consent banner` and push. No other changes needed — the snippet is self-contained.
