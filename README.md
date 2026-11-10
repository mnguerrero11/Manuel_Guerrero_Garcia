# Manuel Guerrero García — Professional Portfolio

A static, bilingual (English/Spanish) portfolio and extended CV. Warm editorial visual style, responsive layout, light/dark themes, no frameworks or compilation step.

## Publish for free on GitHub Pages

1. Create a **public** GitHub repository (for example, `portfolio`).
2. Upload the contents of this ZIP directly to the **repository root**, keeping `index.html` at the top level.
3. Go to **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**, `main`, `/(root)`, then save.
4. GitHub will publish the site at `https://YOUR-USERNAME.github.io/portfolio/` (normally after deployment completes).
5. Alternatively name the repository `YOUR-USERNAME.github.io` to publish at the root domain.

## Preview locally

Open `index.html` in a browser. For reliable localhost behavior, use VS Code Live Server, or run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Edit and personalize

- `index.html`: English text, content structure, project stories, URLs.
- `js/main.js`: Spanish translations, dark mode, mobile navigation, scroll progress.
- `css/styles.css`: colors and visual styling. CSS variables at the top of the file.
- `assets/Manuel_Guerrero_CV.pdf`: downloadable CV. Replace with the current version as needed.
- `assets/favicon.svg`: minimalist brand symbol.

## Editorial integrity

- The energy sector case study does not publicly name the end client. It differentiates completed discovery and assessment from design/planned activities such as Parquet migration, Python ingestion, UAT and cutover.
- The skills section separates technologies used in professional projects from emerging AI topics being studied.
- Research projects link to the University of Huelva's published pages.
- No employer, client or academic endorsement is implied; the website is a personal portfolio.
- Do not include payment, enrollment, or identity documents in the repository.

## Privacy and checklist before publication

- Check with your employer whether public discussion of project scale, source formats or repository size is allowed. If not, generalize those specifics in both English and Spanish.
- Review all claims for accuracy and ensure the attached CV is the latest version.
- Check the email address shown in the footer and CV.
- Google Fonts requires an internet connection; local browser fallback fonts are configured.
- Static sites cannot host a secure contact form without an external provider; contact uses `mailto:`.
- No analytics, trackers or cookies are installed by this project. The theme and language preferences are saved locally in your browser.

## Files

```
index.html
css/styles.css
js/main.js
assets/favicon.svg
assets/Manuel_Guerrero_CV.pdf
README.md
```
