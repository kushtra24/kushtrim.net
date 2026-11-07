# Code guide

How code is written in this project. ESLint enforces most of it, so if `npm run lint` passes you're mostly there.

## Tooling

| Purpose           | Tool                                                    | Command            |
| ----------------- | ------------------------------------------------------- | ------------------ |
| Type checking     | `vue-tsc`                                               | `npm run type-check` |
| Linting           | ESLint + `typescript-eslint` + `eslint-plugin-vue`      | `npm run lint`     |
| Formatting        | ESLint Stylistic (no Prettier)                          | `npm run format`   |
| Editor basics     | `.editorconfig` (UTF-8, LF, 2 spaces, final newline)    | —                  |

Linting and formatting run through one tool and one config: `eslint.config.ts`. To change a formatting
preference, edit the `stylistic.configs.customize({...})` options or add a rule under `app/rules`.

### Editor setup

- **WebStorm:** Settings → Languages & Frameworks → JavaScript → Code Quality Tools → ESLint →
  *Automatic ESLint configuration* + *Run eslint --fix on save*. Turn off *Reformat code* under
  Tools → Actions on Save so WebStorm's formatter doesn't fight ESLint.
- **VS Code:** install the recommended extensions; fix-on-save is set in `.vscode/settings.json`.

## Formatting rules

- 2-space indent, single quotes, **no semicolons**, trailing commas in multiline literals.
- Templates: at most 3 attributes on one line; once a tag breaks, put one attribute per line.
- SFC block order: `<script setup>` → `<template>` → `<style>`, separated by a blank line.

## TypeScript

- Strict mode is on. Avoid `any`; use `unknown` and narrow it.
- Use `import type { ... }` for type-only imports (enforced).
- Prefer union string types (`'light' | 'dark'`) over enums.
- Use the `@/` alias for imports from `src/` (`@/composables/useTheme`), relative paths only within the same folder.

## Vue

- Composition API with `<script setup lang="ts">` only (enforced).
- Type props and emits with `defineProps<{ ... }>()` / `defineEmits<{ ... }>()`.
- Reusable stateful logic goes into composables: `src/composables/useSomething.ts`, exporting `useSomething()`.
- Keep components small. If a template has a clear sub-section with its own data, extract a component.

## Naming and structure

| Thing          | Convention                                   | Example                              |
| -------------- | -------------------------------------------- | ------------------------------------ |
| Pages (routes) | `src/views/<Name>/<Name>View.vue`            | `src/views/Home/HomeView.vue`        |
| Page sections  | `src/views/<Name>/sections/`, `Section` suffix | `HeroSection.vue`                  |
| Section parts  | `src/views/<Name>/components/`               | `ProjectCard.vue`                    |
| Shared parts   | `src/components/` — PascalCase, multi-word   | `SectionHeader.vue`                  |
| Composables    | `src/composables/` — camelCase, `use` prefix | `useTheme.ts`                        |
| Static content | `src/data/`                                  | `projects.ts`                        |
| Translations   | `src/i18n/locales/` — one file per language  | `de.ts`                              |
| Route names    | kebab-case                                   | `not-found`                          |

`<Name>View.vue` only composes sections. A component used by a single section lives in that view's
`components/` folder; see [architecture.md](architecture.md#views).

## Translations

- Never hard-code visible text, `alt` or `aria-label` values in templates. Add them to both
  `src/i18n/locales/en.ts` and `de.ts`. See [architecture.md](architecture.md#translations).
- German text addresses the reader formally ("Sie").

## Styling

- **Mobile first:** write the base styles for small screens, add `min-width` media queries / Tailwind
  breakpoints (`sm:`, `md:`, ...) for larger ones.
- Use Tailwind utilities by default. Use `<style scoped>` when the utility list becomes unreadable.
- **Never hard-code colors.** Use the theme tokens (`bg-surface`, `text-on-surface-variant`,
  `var(--primary)`, ...) so light and dark mode both work. See [architecture.md](architecture.md#theming).
- Touch targets at least 44×44 px; keep visible focus styles.

## Accessibility

- Semantic HTML first (`<nav>`, `<main>`, `<section>`, `<button>` for actions, `<a>` for navigation).
- Every image has `alt` text (`alt=""` if it's decorative). Icon-only buttons need an `aria-label`.
- Respect `prefers-reduced-motion` for animations.

## Before you commit

```sh
npm run lint && npm run build
```
