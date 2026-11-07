# CLAUDE.md

Personal portfolio + showroom of how Kushtrim works. Mobile first, responsive, light/dark mode, English/German.
Static Vue site in `src/`, hosted on Netlify. No backend.

- Follow [docs/code-guide.md](docs/code-guide.md). Structure: [architecture](docs/architecture.md), [dev & deploy](docs/development.md).
- Local dev: `npm run dev` → http://localhost:5173.
- Node is managed by nvm (`~/.nvm/versions/node/v24.16.0/bin`) and may not be on PATH in non-interactive shells.
- Verify changes with `npm run lint && npm run build`.
- Each page is `src/views/<Name>/<Name>View.vue` plus `sections/` (page sections) and `components/` (parts specific to a section).
- All visible text lives in `src/i18n/locales/`: add it to both `en.ts` and `de.ts`.
- Keep the docs up to date when changing structure, tooling or conventions.
