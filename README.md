# Ross Jameson Resume Site

Modern React + TypeScript + Vite + Tailwind single-page interactive resume themed subtly with fantasy TCG aesthetics (gold accents, parchment hints) while remaining professional.

## Sections
- Hero / About
- Experience Timeline
- Projects Grid
- Skills Matrix
- Education
- Contact / Footer

## Getting Started
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Customization Ideas
1. Replace placeholder data in components under `src/components/sections`.
2. Add real links (LinkedIn, GitHub, Email, PDF resume).
3. Consider adding a page view analytics script (e.g., Plausible) for insight.
4. Add Open Graph and Twitter meta tags in `App.tsx` Helmet.
5. Deploy to Netlify, Vercel, or GitHub Pages.

## HR Appeal Notes (Wizards of the Coast)
- Uses terminology referencing color pie & encounter design tastefully; shows domain familiarity.
- Emphasizes engineering impact (metrics) and collaboration.
- Accessible: semantic HTML, high contrast, focus states.
- Mobile-first responsive layout.

## License
This project is provided for personal resume purposes.


## github workflow deploy break down 
What is this file? deploy.yml is an instructions list telling GitHub’s build robots (GitHub Actions) how to:

Notice new code on your main branch.
Install dependencies.
Build the production version (dist).
Publish (deploy) it to GitHub Pages so people can view it.
Top to bottom:

name: Deploy to GitHub Pages Just the label you see in the Actions tab.

on: push: branches: [ main ] Runs automatically every time you push commits to the main branch (so yes, future pushes auto‑deploy). workflow_dispatch: Adds a manual Run workflow button in the Actions tab.

permissions: Gives this workflow the minimum rights: read code, write to Pages, use an identity token (for secure deploy).

concurrency: If you push twice quickly, it cancels the older in‑progress run so only the latest deploys (prevents racing).

jobs: A job is a set of steps on a fresh virtual machine.

Two jobs: build then deploy.

build job steps:

Checkout: Downloads your repo files into the runner.
Setup Node: Installs Node.js 20 (and caches npm modules for speed).
Install deps: npm ci installs exactly what’s in package-lock.json.
Build site: npm run build creates optimized static files in dist.
Configure Pages: Prepares the environment (sets up metadata, etc.).
Upload artifact: Packs the dist folder and stores it as an artifact named for Pages. Think of it as “bundle to pass to deploy stage.”
deploy job: needs: build means wait until build succeeds. environment: github-pages tells GitHub this is the Pages environment and lets it show a URL. Deploy step (actions/deploy-pages): Takes the uploaded artifact and publishes it to the special GitHub Pages hosting storage. Result: Files are served at https://rosco1813.github.io/portfolio/

Why split build and deploy? Clean separation; deploy only runs if build succeeds. Also enables caching, permissions boundaries, and clearer logs.

Artifact concept: Temporary package of your built dist folder handed from build job to deploy job (since each job runs on a clean machine).

Auto deploy on future pushes? Yes. Any git push to main triggers the workflow, rebuilds, redeploys. Just commit & push.

Manual redeploy? Go to Actions > Deploy to GitHub Pages > Run workflow (uses latest code already on main).

Common tweaks (optional later):

Change branch name: update branches: [ main ] if you rename.
Add cache for build output: usually not needed; vite is fast.
Add lint/test steps before build.
How to confirm a deploy finished: Actions tab shows green check. The Deploy step log ends with a URL. Refresh the site (Ctrl+F5) to bypass cache.