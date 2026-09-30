# WISAM public website

A static bilingual Astro website for the WISAM software prototype. This standalone repository contains only public website source, content, and approved media. The WISAM application and its history are outside this repository.

## Local development

```sh
npm ci
npm run dev
```

Before publishing a change, run `npm run format:check`, `npm run lint`, `npm run check`, and `npm run build`. The full browser QA script is `npm test` after starting a local server.

## Updating the live site

1. Edit the website and review `git diff`.
2. Run the checks above, then `git add . && git commit -m "Describe the change"`.
3. Run `git push origin main`. GitHub Actions builds and publishes the site to the same GitHub Pages URL.

The production repository is a GitHub user site (`<username>.github.io`) so the existing root-relative English and Arabic routes remain correct. The Thmanyah font files are intentionally absent because the available license does not permit serving them as downloadable web fonts. Visitors without Thmanyah installed see the IBM Plex Sans Arabic fallback.
