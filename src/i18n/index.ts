import { computed, ref, watchEffect } from 'vue'
import de from '@/i18n/locales/de'
import en from '@/i18n/locales/en'
import type { Messages } from '@/i18n/locales/en'

export type Locale = 'en' | 'de'

const messages: Record<Locale, Messages> = { en, de }
const STORAGE_KEY = 'locale'

function readLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'de') return stored
  } catch {
    // Storage can be blocked (private mode, site settings) — fall back to the browser language.
  }
  return navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en'
}

// Module-level state: every component calling useI18n() shares the same language.
const locale = ref<Locale>(readLocale())
const t = computed(() => messages[locale.value])

watchEffect(() => {
  document.documentElement.lang = locale.value
  document.title = t.value.meta.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', t.value.meta.description)
})

export function useI18n() {
  return {
    /** The active language. */
    locale,
    /** All texts of the active language, e.g. `t.hero.title` in a template. */
    t,
    toggleLocale() {
      locale.value = locale.value === 'en' ? 'de' : 'en'
      try {
        localStorage.setItem(STORAGE_KEY, locale.value)
      } catch {
        // Ignore — the language still applies for this visit.
      }
    },
  }
}
