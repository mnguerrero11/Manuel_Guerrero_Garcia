# Manuel Guerrero García — Professional Portfolio

A static, bilingual (English/Spanish) professional portfolio. Responsive layout, light/dark themes, no frameworks or compilation step.

## Visual direction

Technical descriptions of professional experience, education, certifications and research. Manrope is used for readable headings and body text; DM Mono identifies dates, project sectors and technical categories. The palette uses navy blue and burgundy with neutral backgrounds. Decorative diagrams, slogans and chapter labels have been removed.

| Role | Light | Dark |
| --- | --- | --- |
| Background | `#F7F5F1` | `#151E2C` |
| Text | `#202C3D` | `#ECEFF5` |
| Primary / actions | `#203753` | `#B9CAE2` |
| Burgundy / details | `#7E3446` | `#DB9CA9` |
| Panels | `#EEF0F4` | `#1D2A3E` |

University logos and certification artwork are stored locally in `assets/logos/`. Sources are documented in [assets/logos/SOURCES.md](assets/logos/SOURCES.md). Their original colors and proportions are preserved, with a navy background for the white Federico II logo. Reduced-motion preferences are respected.

## Education and research

- `#education` is a dedicated section containing four academic qualifications and four professional certifications, including IBM RAG and Agentic AI on Coursera. University links and certification information links point to the issuing institutions; they are not personal credential verification links.
- `#divergence-details` and `#multimodal-details` are independent native HTML disclosures. They work with a mouse, keyboard or touch, and remain open when changing language.
- The complete technical reports live in `#divergence-report` and `#multimodal-report` in `index.html`. Each contains eight stages, a functional architecture diagram, experimental configurations, official result tables and the published bibliographic reference. Narrative length is approximately 1,200–1,350 words per report and language, excluding tables and navigation.
- Stage links open their enclosing research disclosure when necessary, including when visiting a bookmarked URL. Opening and closing a report recalculates reading progress; nested stages do not affect the main navigation's active section.
- English report text is in `index.html`; Spanish text is in `translations.es` in `js/main.js`. Translate individual text nodes, not parent containers containing links or markup. Changing language retains disclosure state.
- `#awards`, within Education, presents the 2024 Andalusian AI finalist recognition and the second Social Innovation thesis prize from the 2024 Aguas de Huelva call, awarded in February 2025. The profile and 2024 project link to these cards.
- Original documents are local: `assets/papers/` contains the two unmodified papers; `assets/awards/` contains the original finalist diploma, the original Aguas de Huelva certificate, and image previews rendered from that PDF. No certificate artwork was generated or recreated.
- Award previews progressively enhance ordinary image links with a native modal dialog. The viewer supports keyboard navigation, Escape, close-button/backdrop dismissal, return of focus and access to the original document. Without JavaScript, the image links still work.
- [RESEARCH_SOURCES.md](RESEARCH_SOURCES.md) maps the report stages, awards and official metrics to their evidence and records how discrepancies were resolved. Individual technical development is attributed according to the portfolio owner's explicit confirmation; bibliographic author lists remain unchanged.

## Publish for free on GitHub Pages

1. Create a **public** GitHub repository (for example, `portfolio`).
2. Upload the contents of this ZIP directly to the **repository root**, keeping `index.html` at the top level.
3. Go to **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**, `main`, `/(root)`, then save.
4. GitHub will publish the site at `https://YOUR-USERNAME.github.io/portfolio/` (normally after deployment completes).
5. Alternatively name the repository `YOUR-USERNAME.github.io` to publish at the root domain.

## Validation of the academic reports and awards

- Checked eight viewport widths (320, 390, 720, 768, 850, 1024, 1280 and 1440 px), English/Spanish, with both research reports closed and expanded; no page-level horizontal overflow.
- Verified the 16 report stages, complete translations, independent disclosures, stage deep links, main navigation state and reading progress behavior.
- Checked modal opening with Enter, initial focus, focus containment, Escape and close-button dismissal, focus restoration, document loading and mobile layout.
- Confirmed every displayed official result against the organizers' ALL workbooks: all 10 ranks, normalized ICM values and applicable F1/cross-entropy values match to four decimal places.
- Compared SHA-256 digests of the four copied original documents against the supplied files; all match.
- Checked local resource responses, JavaScript syntax, unique IDs, local anchor targets and ARIA references. Website checks do not rerun model training or establish reproducibility of the original research code.

## Preview locally

Open `index.html` in a browser. For reliable localhost behavior, use VS Code Live Server, or run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Edit and personalize

- `index.html`: English text, content structure, project stories, URLs.
- `js/main.js`: Spanish translations, dark mode, mobile navigation, scroll progress.
- `css/styles.css`: colors and visual styling. CSS variables at the top of the file.
- `assets/Manuel_Guerrero_CV.pdf`: downloadable CV. Replace with the current version as needed.
- `assets/favicon.svg`: personal monogram.
- `assets/logos/`: university logos, certification artwork and their sources.
- `assets/papers/`: original research PDFs.
- `assets/awards/`: award documents and certificate previews.
- `RESEARCH_SOURCES.md`: research and award evidence, metric definitions and editorial decisions.

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
assets/logos/
README.md
```
