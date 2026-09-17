# 🎬 MovieExplorer

A responsive Movie Explorer web application built with **React + Vite + Tailwind CSS**, using the free **TVMaze API**.

## Live Link

https://movie-explorer-ten-omega.vercel.app/

## Features

- Responsive Home Page
- Navbar with branding, navigation, and Movies CTA
- Hero banner with movie-related background
- Footer with application name and copyright
- Dedicated Movie Listing page
- Dynamic title search
- TVMaze `/shows` integration
- TVMaze `/search/shows?q=:query` integration
- Reusable MovieCard component
- Poster, title, release year, rating, and See Details button
- Responsive CSS Grid
- Interactive details modal
- Close button and outside-click closing
- Loading, empty, and API error states
- Mobile/tablet/desktop responsive layouts

## Tech Stack

- React
- JavaScript (ES6+)
- Vite
- Tailwind CSS
- React Router
- TVMaze API

## Run Locally

Requirements: Node.js 18+ recommended.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production Build

```bash
npm run build
npm run preview
```

## API

This project uses:

- `GET https://api.tvmaze.com/shows`
- `GET https://api.tvmaze.com/search/shows?q=:query`

TVMaze API documentation:
https://www.tvmaze.com/api

## Deployment

### Vercel

1. Push this project to a public GitHub repository.
2. Import the repository into Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

### Netlify

1. Push to GitHub.
2. Add the repository to Netlify.
3. Build command: `npm run build`.
4. Publish directory: `dist`.
5. Deploy.
