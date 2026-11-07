# Local development & deployment

## Run locally

```sh
npm install
npm run dev       # http://localhost:5173
```

Node is listed under `engines` in `package.json`.

```sh
npm run lint      # check code quality and formatting
npm run format    # auto-fix lint and formatting issues
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build locally
```

## Deploy (Netlify)

The site is fully static. `netlify.toml` holds the build command, the output folder (`dist`), the Node
version (pinned to the local nvm version), the redirect that sends every path to `index.html`, so direct
visits to `/contact` work, and long-term cache headers for the hashed files in `/assets`.

1. In Netlify, create a new site from the Git repository (or run `npx netlify deploy` from this folder).
2. Netlify reads `netlify.toml`, so no build settings need to be entered.
3. Every push to the production branch deploys; other branches get preview deploys if enabled.

No environment variables are needed.
