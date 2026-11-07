import { computed, ref, watchEffect } from 'vue'

export type ThemePreference = 'light' | 'dark' | 'system'
export type Theme = 'light' | 'dark'

// Keep in sync with the inline script in index.html (prevents a flash of the wrong theme).
const STORAGE_KEY = 'theme'
const systemQuery = window.matchMedia('(prefers-color-scheme: dark)')

function readPreference(): ThemePreference {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    // Storage can be blocked (private mode, site settings) — fall back to the system theme.
  }
  return 'system'
}

function savePreference(value: ThemePreference) {
  try {
    if (value === 'system') localStorage.removeItem(STORAGE_KEY)
    else localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // Ignore — the theme still applies for this visit.
  }
}

// Module-level state: every component calling useTheme() shares the same theme.
const preference = ref<ThemePreference>(readPreference())
const systemIsDark = ref(systemQuery.matches)
systemQuery.addEventListener('change', (event) => {
  systemIsDark.value = event.matches
})

const theme = computed<Theme>(() => {
  if (preference.value === 'system') return systemIsDark.value ? 'dark' : 'light'
  return preference.value
})

watchEffect(() => {
  document.documentElement.dataset.theme = theme.value
  savePreference(preference.value)
})

export function useTheme() {
  return {
    /** What the user chose: 'light', 'dark' or 'system' (follow the OS). */
    preference,
    /** The theme actually applied right now. */
    theme,
    setTheme(value: ThemePreference) {
      preference.value = value
    },
    toggleTheme() {
      preference.value = theme.value === 'dark' ? 'light' : 'dark'
    },
  }
}
