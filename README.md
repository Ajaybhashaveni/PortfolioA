# Ajay Bhashaveni — Personal Portfolio (React + Vite + Tailwind)

This project is a modern, responsive personal portfolio built with React, Vite and Tailwind CSS. It includes Framer Motion animations, a dark/light theme toggle, EmailJS contact form integration, and a GitHub repo carousel.

Quick start

1. Install dependencies

```powershell
cd "c:\Users\Ajay\OneDrive\Documents\applications\PLACEMENT\Java Training classes\portfolio"
npm install
```

2. Place assets

- Add your profile image as `src/assets/GATE_PIC.png`
- Add a `Resume.pdf` (optional) in `src/assets/Resume.pdf`

3. Set EmailJS environment variables (if you want the contact form to work)

Create a `.env` file in the project root with:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Run development server

```powershell
npm run dev
```

Notes & extras

- GitHub repositories are fetched from the public GitHub API for `Ajaybhashaveni` — no token required for a small number of requests, but rate limits may apply.
- Tailwind JIT is configured via PostCSS. If you alter the content paths, update `tailwind.config.cjs`.
- To deploy, run `npm run build` and serve the `dist` directory.
- To deploy, run `npm run build` and serve the `dist` directory.

Automatic GitHub Pages deployment

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that will build the app and deploy the `dist` output to GitHub Pages whenever you push to the `main` or `master` branch.

How to publish to GitHub Pages (quick steps):

1. Create a repository on GitHub (for example `ajay-portfolio`).

2. In your local project directory, initialize git (if not already), add remote, and push:

```powershell
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

3. After push, GitHub Actions will run the `deploy.yml` workflow. When it completes successfully, GitHub Pages will serve the site from the workflow-managed Pages environment. You can view the Pages settings in your repository to see the published URL.

Notes:
- The workflow uses the official `actions/upload-pages-artifact` and `actions/deploy-pages` flow and requires no extra secrets — GitHub provides a `GITHUB_TOKEN` automatically for Actions.
- If your site will be hosted under a subpath (for example `https://<your-username>.github.io/<repo>/`), consider updating `vite.config.js` `base` option to `'/<repo>/'` so asset URLs are correct before building.
- If you prefer Netlify or Vercel, I can add configuration files and a one-click deploy link.

Quick `gh` CLI one-liner (if you have GitHub CLI installed and are logged in):

```powershell
# from the project root — creates a public repo, pushes, and opens it
gh repo create <your-username>/<your-repo> --public --source=. --remote=origin --push && gh repo view --web
```

If you use the above, the Actions workflow will start automatically after the push.

Files of interest

- `src/components/Hero.jsx` — hero, photo, typewriter and CTA buttons
- `src/components/Contact.jsx` — EmailJS form (requires env keys)
- `src/components/RepoCarousel.jsx` — fetches public repos and renders a carousel

- `src/components/Resume.jsx` — printable resume view (Print / Download as PDF)

Notes about the resume

- The Vite React app includes a printable `Resume` component that you can print to PDF using the "Print / Download PDF" button on the Resume section. If you prefer to include a ready-made PDF in the repo, place `Resume.pdf` in `src/assets/Resume.pdf` and the "Download (PDF)" link will point to it.

If you'd like, I can:

- Add SEO-friendly Next.js configuration (server-rendered pages) for stronger SEO
- Expand each project card with screenshots and live demo links
- Wire a CI/CD workflow that deploys to Netlify/Vercel
