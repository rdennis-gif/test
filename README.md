# JAGGAER S2P Masterclass (Self-Hosted Microsite)

Enterprise-style, chapter-based training web application designed for static hosting (GitHub Pages friendly).

## Features

- 9 clickable chapter routes via hash navigation (`#1` ... `#9`)
- Consistent chapter layout with:
  - Hero (Chapter x of 9)
  - Learning path navigation
  - Foundation section
  - Business case metrics
  - Customer challenge cards
  - Direct vs. indirect spend comparison
  - Competitive comparison table
  - Resources section with outbound links
  - Quiz with instant feedback
  - Previous/next chapter controls
- Structured chapter content data in a single maintainable data object (`CHAPTERS`) in `app.js`
- Responsive layout and accessible semantics (`nav`, headings, `aria-live`, table headers)
- Clean, minimalist enterprise design language

## Local development

```bash
python -m http.server 8000 --bind 127.0.0.1
```

Open:

- `http://127.0.0.1:8000/`

## GitHub Pages deployment

Because this project is static HTML/CSS/JS, deploy directly by publishing the repository root (or `/docs`) via GitHub Pages.
