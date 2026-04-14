# surya-pratap.in

Personal portfolio site for **Surya Pratap** — senior frontend engineer. Built with **Vite**, **React 19**, and **TypeScript**.

**Repository:** [github.com/spratap124/surya-pratap.in](https://github.com/spratap124/surya-pratap.in)

## Features

- Single-page layout: intro, **experience** timeline, **projects** grid with filters, about, contact
- Content and copy are driven from one config file (`src/config/site.ts`) for easy updates
- Responsive header navigation with smooth scrolling

## Scripts

| Command        | Description                    |
| -------------- | ------------------------------ |
| `npm install`  | Install dependencies           |
| `npm run dev`  | Local dev server (Vite + HMR)  |
| `npm run build`| Production build → `dist/`     |
| `npm run preview` | Serve `dist` locally       |
| `npm run lint` | Run ESLint                     |

## Project layout

```
src/
  config/site.ts    # Site copy, nav, experience, projects, contact, social
  components/       # Header, Hero, ExperienceSection, ProjectsSection, etc.
  App.css           # Layout and section styles
public/
  favicon.png
  projects/         # Project thumbnails
```

## Customizing content

Edit **`src/config/site.ts`**: meta title/description, hero, experience entries, project list (including `image` paths under `public/projects/`), contact email, footer quote, and navigation labels.

## Deploying

The app is a static SPA. After `npm run build`, deploy the **`dist`** folder to any static host (e.g. GitHub Pages, Netlify, Vercel, Cloudflare Pages). Configure the host to serve `index.html` for client-side routes if you add routing later.

## Tech stack

- [Vite](https://vite.dev/)
- [React](https://react.dev/)
- TypeScript · ESLint
