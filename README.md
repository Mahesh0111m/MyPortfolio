# Portfolio – Mahesh

A responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- Single-page layout with smooth scroll navigation
- Hero section with rounded profile image (replace `public/profile-placeholder.svg` with your photo)
- About, Experience, Skills, Projects, Education, and Contact sections
- Dark / light mode with persistence
- Responsive design (mobile, tablet, desktop)
- Smooth animations via Framer Motion

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Replace profile image

Place your photo at `public/profile-placeholder.svg` (or any image), or update the `src` in `src/components/Hero.jsx` to point to your image path (e.g. `public/mahesh.jpg` and use `src="/mahesh.jpg"`).

## Contact form (Formspree)

The contact form submits to [Formspree](https://formspree.io). To use your own form:

1. Create a form at formspree.io and copy the form ID.
2. Create a `.env` file (see `.env.example`) and set `VITE_FORMSPREE_ID=your_form_id`.
3. Restart the dev server. Messages will be sent to your Formspree email.
