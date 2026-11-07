# Architecture

## Stack

- **Vue 3** + **TypeScript**, bundled with **Vite**
- **vue-router** for routing
- **Tailwind CSS v4** (via `@tailwindcss/vite`, no config file — configured in CSS)
- **Material Symbols** for icons, **Geist** and **JetBrains Mono** for text (all from Google Fonts)
- Fully static, hosted on **Netlify** — see [development.md](development.md)

## Folder structure

```
src/                     # Frontend (Vue)
├── assets/              # main.css (Tailwind import, theme tokens, base styles) and img/
├── components/          # Components shared by several views
├── composables/         # Shared stateful logic (useTheme)
├── data/                # Language-independent data (project slugs and previews, links)
├── i18n/                # useI18n() and the texts of each language (locales/en.ts, locales/de.ts)
├── router/index.ts      # Route table
├── views/               # One folder per page, see below
├── App.vue              # Root: applies the theme, renders site controls and <RouterView />
└── main.ts              # App bootstrap: CSS, router
docs/                    # Project documentation
netlify.toml             # Netlify build settings and SPA redirect
```

### Views

Every page has the same shape:

```
views/Home/
├── HomeView.vue         # Only composes the sections, in page order
├── sections/            # One component per page section (HeroSection.vue, ...)
└── components/          # Parts specific to a section (ProjectCard.vue, ...)
```

A section can be reused by another view by importing it from the view that owns it: `HomeView` renders
`Contact/sections/ContactSection.vue`.
Smaller parts used by several views go in `src/components/`.

## Routing

Routes live in `src/router/index.ts`. History mode is used, so URLs have no `#`.

| Path              | Name        | View                            |
| ----------------- | ----------- | ------------------------------- |
| `/`               | `home`      | `views/Home/HomeView.vue`       |
| `/projects/:slug` | `project`   | `views/Project/ProjectView.vue` |
| `/contact`        | `contact`   | `views/Contact/ContactView.vue` |
| anything else     | `not-found` | `views/NotFoundView.vue`        |

All routes except home are lazy-loaded. Hash links (`/#works`) scroll smoothly to the section;
navigating to a new page jumps to the top. Slugs come from `src/data/projects.ts`; `ProjectView` renders
the not-found page for an unknown slug.

**SPA fallback:** the redirect in `netlify.toml` serves `index.html` for every path, so direct visits to
`/contact` work.

## Translations

All visible text lives in `src/i18n/locales/`. `en.ts` is the source: its shape defines the `Messages` type,
and `de.ts` must match it, so a missing German text fails `npm run build`. The check covers keys, not the
number of items in a list.

```vue
<script setup lang="ts">
import { useI18n } from '@/i18n'

const { t, locale, toggleLocale } = useI18n()
</script>

<template>
  <h2>{{ t.journey.title }}</h2>
</template>
```

`t` is a plain object, so lists work with `v-for` and texts autocomplete. In `<script>`, read it as `t.value`.
Project texts are keyed by slug (`t.projects[project.slug].title`); `src/data/projects.ts` only holds what is
the same in every language.

The language comes from `localStorage` (`locale`) or else the browser language: German for any `de*`, otherwise
English. The choice is saved only when the visitor uses the toggle. `src/i18n/index.ts` keeps `<html lang>`,
the page title and the meta description in sync. URLs are the same in both languages.

### Project details

The full project page follows the `ProjectDetails` schema in `src/i18n/projectDetails.ts`: overview, what it
does, architecture (with a diagram), engineering highlights, tech stack and project scope. To add details for
a project, create `locales/projects/<slug>.en.ts` and `<slug>.de.ts` (see `pilates-cue`) and register them
under `projectDetails` in `en.ts` and `de.ts`. A project without details shows only its short description.
To show a Google Play or GitHub button on the project page, set `link` on the project in `src/data/projects.ts`.

To add a language: add `locales/<code>.ts` typed as `Messages`, add it to `Locale` and `messages` in
`src/i18n/index.ts`, and update the toggle in `SiteControls.vue`.

## Responsive layout

Layouts use Tailwind breakpoints only, written mobile first:

| Width             | Layout                                                                                  |
| ----------------- | --------------------------------------------------------------------------------------- |
| Base              | One column, as in the mobile design                                                     |
| `sm` (640px)      | Hero buttons side by side                                                               |
| `md` (768px)      | Larger headings and body text, 2-column project and skill grids                         |
| `lg` (1024px)     | Two-column hero, profile, contact and project page, skills in 3 columns; journey in 2 columns with education always visible |
| `xl` (1280px)     | Projects in 3 columns, display-size hero heading                                        |

Each section has a full-width background and an inner `mx-auto w-full max-w-6xl` container, with
`px-gutter-mobile md:px-margin` on the section.

## Theming

Light and dark mode are driven by a `data-theme="light|dark"` attribute on `<html>`.

1. **Before first paint**, an inline script in `index.html` sets `data-theme` from `localStorage`
   (or the OS setting), so there's no flash of the wrong theme.
2. **At runtime**, `src/composables/useTheme.ts` owns the state and keeps the attribute in sync:

   ```ts
   const { preference, theme, setTheme, toggleTheme } = useTheme()
   // preference: 'light' | 'dark' | 'system'  (what the user chose)
   // theme:      'light' | 'dark'             (what is applied right now)
   ```

   `'system'` follows the OS and updates live when it changes. An explicit choice is saved in
   `localStorage` under `theme`; choosing `'system'` removes it.
3. **Colors** are CSS variables in `src/assets/main.css`: light values on `:root`, dark overrides on
   `:root[data-theme='dark']`. They are exposed to Tailwind as `bg-surface`, `bg-surface-container-low`,
   `text-on-surface`, `text-on-surface-variant`, `bg-primary`, `text-on-primary`, `text-success`, ... and
   switch automatically.
4. The Tailwind `dark:` variant follows `data-theme` too (`dark:hidden`), for one-off cases.

To add a color: add the variable to both `:root` blocks and map it in `@theme inline`.

## Typography and spacing

`src/assets/main.css` defines the design's type scale (`text-headline-md`, `text-body-sm`, `text-label-md`,
`text-code-sm`, ...) and spacing (`px-gutter-mobile`, `py-space-2xl`, ...). Text uses Geist by default; add
`font-mono` for JetBrains Mono.

## Icons

Use `AppIcon` with a Material Symbols name. Icons are decorative and hidden from screen readers, so give
icon-only links and buttons an `aria-label`.

```vue
<AppIcon name="download" />
<AppIcon name="mail" :size="24" />
```

Only the icons listed in the font link in `index.html` are downloaded. To add one, add it to that list
(alphabetical order) and to the `name` type in `src/components/AppIcon.vue`.
