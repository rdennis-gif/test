# Source-to-Pay Landscape Web App

This repository contains a static web app (`index.html` + `styles.css`) that can be published as a shareable URL using **GitHub Pages**.

## Shareable URL (after enabling Pages)

Once deployed from the `main` branch, your public URL will be:

- `https://<your-github-username>.github.io/<repo-name>/`

If this repository is named `<your-github-username>.github.io`, your URL will be:

- `https://<your-github-username>.github.io/`

## One-time setup in GitHub

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Ensure your default branch is `main` (the deployment workflow runs on pushes to `main`).
5. Push to `main` to trigger deployment.

## Local preview

Run:

```bash
python -m http.server 8000 --bind 127.0.0.1
```

Then open:

- `http://127.0.0.1:8000/`

## Download bundles for GitHub web upload

Prepared bundles are available in `download/`:

- `download/website-only.zip` → just `index.html` + `styles.css`
- `download/source-to-pay-site.zip` → site files + Pages workflow + README
