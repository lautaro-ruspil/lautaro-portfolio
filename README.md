# Portfolio — Lautaro Ruspil

Portfolio personal de **Lautaro Ruspil**, desarrollador Full Stack con foco en frontend.

🔗 **Live:** [lautaro-ruspil.web.app](https://lautaro-ruspil.web.app/)

## Stack

- **Frontend:** React 19 · Vite 8 · Tailwind CSS v4 · Framer Motion
- **Backend (proyectos):** NestJS · MySQL · Firebase · Railway
- **Tooling:** ESLint · sharp · clsx · lucide-react

## Ejecutar localmente

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura del proyecto

```
src/
  App.jsx                  # Layout principal
  index.css                # Tailwind + custom fonts
  main.jsx                 # Entry point
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Experience.jsx
    Projects.jsx
    Skills.jsx
    Contact.jsx
    Footer.jsx
    icons/
      SocialIcons.jsx      # GitHub, LinkedIn icons reutilizables
  data/
    projects.js            # Datos de proyectos
    skills.js              # Categorías y skills
    icons.js               # SVG paths (Simple Icons)
public/
  hero.webp                # Foto personal
  og-image.png             # Open Graph image (1200×630)
  previews/                # Screenshots de proyectos (WebP)
  favicon.svg              # Favicon SVG
  favicon-*.png            # Favicons PNG (16, 32, 192, 512)
  apple-touch-icon.png     # iOS icon (180×180)
  sitemap.xml
  robots.txt
  site.webmanifest
```

## Proyectos incluidos

| Proyecto | Tipo | Demo |
|----------|------|------|
| LeanCuts | Full Stack | [leancutss.web.app](https://leancutss.web.app/) |
| Mediturn | Full Stack | [mediturn.web.app](https://mediturn.web.app/) |
| MenuQR | Frontend | [menu-qr-plantilla.web.app](https://menu-qr-plantilla.web.app) |
| Analytics Dashboard | Frontend | [dashboard-analytics-lr.web.app](https://dashboard-analytics-lr.web.app) |
| Landing Gimnasio | Frontend | [gimnasio-plantilla.web.app](https://gimnasio-plantilla.web.app/) |

## Deploy

Hosted en Firebase Hosting. Para deployar:

```bash
npm run build
firebase deploy
```

## Licencia

MIT
