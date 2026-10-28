# Justin Raine Justiza — Developer Portfolio

A responsive React portfolio featuring SagipBayan and TaskEdge, project previews, animated project details, and professional contact links.

## Run locally

```powershell
npm.cmd --prefix client install
npm.cmd start
```

Open the URL printed by Vite, normally http://127.0.0.1:5173.

## Test and build

```powershell
npm.cmd test
npm.cmd run build
```

For Vercel, use `client` as the root directory, Vite as the framework, and `dist` as the output directory.

## Project structure

- `client/src/App.jsx`: page sections.
- `client/src/index.css`: styles, responsive layouts, and animations.
- `client/src/portfolio/`: project data and portfolio components.
- `client/public/`: favicon, project screenshots, and downloadable files.
- `client/tests/`: content tests.

## Update content

Edit `client/src/portfolio/data.js` to update profile details, projects, contact links, and skills.

To enable the résumé download, add `client/public/Justin-Raine-Justiza-CV.pdf` and set `profile.resume` to `/Justin-Raine-Justiza-CV.pdf`. The download button remains disabled while this value is `null`.

## Accessibility

The portfolio includes keyboard focus indicators, a skip link, mobile navigation, project dialogs with Escape dismissal and focus restoration, image descriptions, and reduced-motion support.

## Environment

The portfolio runs entirely in the browser and does not require a backend or database. Local environment files are excluded from Git. `.env.legacy-server` is an unused backup of the previous backend configuration.
