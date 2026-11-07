<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import AppIcon from '@/components/AppIcon.vue'
import { email } from '@/data/profile'
import { useI18n } from '@/i18n'

const { t } = useI18n()

const copied = ref(false)
let resetTimer: ReturnType<typeof setTimeout> | undefined

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email)
  } catch {
    window.location.href = `mailto:${email}`
    return
  }
  copied.value = true
  clearTimeout(resetTimer)
  resetTimer = setTimeout(() => {
    copied.value = false
  }, 3000)
}

onBeforeUnmount(() => clearTimeout(resetTimer))
</script>

<template>
  <div class="mb-space-lg flex flex-col rounded-[20px] bg-surface-container-lowest p-5 shadow-xs">
    <span class="mb-2 text-label-eyebrow text-on-surface-variant uppercase">{{ t.contact.directEmail }}</span>
    <div class="flex flex-wrap items-center justify-between gap-2">
      <span class="font-mono text-code-sm font-semibold break-all text-on-surface">{{ email }}</span>
      <button
        class="flex items-center gap-1.5 rounded-lg bg-surface-container-high px-3 py-1.5 text-label-md text-on-surface transition-colors hover:bg-surface-container-highest active:scale-95"
        type="button"
        :aria-label="t.contact.copyEmailLabel"
        @click="copyEmail"
      >
        <AppIcon :name="copied ? 'check' : 'content_copy'" :size="16" />
        <span>{{ copied ? t.contact.copied : t.contact.copyEmail }}</span>
      </button>
    </div>
    <div role="status">
      <div v-if="copied" class="mt-2 flex items-center gap-1 font-mono text-code-sm text-success">
        <AppIcon name="check_circle" :size="14" />
        {{ t.contact.copiedToast }}
      </div>
    </div>
  </div>
</template>
