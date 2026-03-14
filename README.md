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

## Contact form

The contact form shows a success message on submit. To send real emails, integrate [Formspree](https://formspree.io) or similar: set the form `action` to your Formspree endpoint and use `method="POST"`.
