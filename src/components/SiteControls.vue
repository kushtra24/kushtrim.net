<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import { useI18n } from '@/i18n'

const { toggleTheme } = useTheme()
const { locale, t, toggleLocale } = useI18n()
</script>

<template>
  <aside class="pt-safe pointer-events-none fixed top-3 right-3 z-50">
    <div class="pointer-events-auto flex items-center rounded-full bg-surface-container-lowest/80 px-2 py-1 shadow-[0_1px_8px_rgba(0,0,0,0.06)] backdrop-blur-xl">
      <button
        class="flex min-h-11 items-center justify-center px-2 font-mono text-code-sm text-on-surface-variant transition-colors hover:text-on-surface"
        type="button"
        :aria-label="t.controls.switchLanguage"
        @click="toggleLocale"
      >
        <span :class="locale === 'en' ? 'font-bold text-on-surface' : 'text-outline'">EN</span>
        <span class="mx-1 text-outline-variant opacity-60">|</span>
        <span :class="locale === 'de' ? 'font-bold text-on-surface' : 'text-outline'">DE</span>
      </button>
      <div aria-hidden="true" class="mx-0.5 h-3.5 w-px bg-outline-variant/40" />
      <button
        class="flex min-h-11 min-w-11 items-center justify-center text-on-surface-variant transition-colors hover:text-on-surface"
        type="button"
        :aria-label="t.controls.toggleTheme"
        @click="toggleTheme"
      >
        <svg
          aria-hidden="true"
          class="block size-4 dark:hidden"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.75"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
        <svg
          aria-hidden="true"
          class="hidden size-4 dark:block"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.75"
          viewBox="0 0 24 24"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </button>
    </div>
  </aside>
</template>
