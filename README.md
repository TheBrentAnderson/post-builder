# Elevate Post Builder

Internal social post builder for Elevate Realty Group. Static site, no build step, no server.

## Publish with GitHub Pages

1. Create a new repository on github.com (private is fine; Pages needs a paid plan for private repos, so use public if you are on the free tier).
2. Upload the contents of this folder to the repository root. On github.com: **Add file > Upload files**, drag everything in, commit.
3. Go to **Settings > Pages**. Under *Source* choose **Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
4. Wait about a minute. Your URL will be `https://<your-username>.github.io/<repo-name>/`.
5. Send that link to the team. Bookmark it on a phone home screen and it behaves like an app.

## Files

- `index.html` — the app shell and all styling
- `builder-core.jsx` — slide rendering, media handling, PNG export, colour schemes
- `builder-app.jsx` — screens: landing, gallery, builder, profile
- `templates.js` — the shared template library. **Edit this file to add or change post templates.**
- `assets/` — logos and default headshot
- `ds/colors_and_type.css` — Elevate brand tokens

## Adding a template

Open `templates.js`, copy an existing block, change the `id`, `name`, `cat`, and the six slides. Commit. Every agent sees it on next load.

## Known limits of this version

- Agent profiles and drafts are stored in each person's own browser, not synced. Clearing site data loses them.
- Uploaded photos live in the browser too, so a post started on a laptop cannot be finished on a phone.
- Anyone with the link can open it. There are no accounts.

Fixing those three means adding a backend (accounts, a shared template store, cloud media). The code is already split along those lines.

## Monthly template packs

New templates ship as a dated pack file, e.g. `templates-2026-09.js`. Each pack pushes its own categories and templates onto `window.CATEGORIES` / `window.TEMPLATES`, so the core `templates.js` never has to change. To add a month: copy the newest pack, rewrite its contents, and add one `<script src="templates-YYYY-MM.js"></script>` line in `index.html` after `templates.js`.
