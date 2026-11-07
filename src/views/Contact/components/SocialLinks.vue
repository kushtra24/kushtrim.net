<script setup lang="ts">
import AppIcon from '@/components/AppIcon.vue'
import { email, githubUrl, linkedinUrl } from '@/data/profile'
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>

<template>
  <div class="mb-space-xl flex items-center justify-center gap-4 lg:mb-space-lg lg:justify-start">
    <a
      class="flex size-12 items-center justify-center rounded-full bg-surface-container text-on-surface transition-colors hover:bg-surface-container-high"
      rel="noopener noreferrer"
      target="_blank"
      :aria-label="t.contact.linkedinLabel"
      :href="linkedinUrl"
    >
      <AppIcon name="share" :size="24" />
    </a>
    <a
      class="flex size-12 items-center justify-center rounded-full bg-surface-container text-on-surface transition-colors hover:bg-surface-container-high"
      rel="noopener noreferrer"
      target="_blank"
      :aria-label="t.contact.githubLabel"
      :href="githubUrl"
    >
      <AppIcon name="terminal" :size="24" />
    </a>
    <a
      class="flex size-12 items-center justify-center rounded-full bg-surface-container text-on-surface transition-colors hover:bg-surface-container-high"
      :aria-label="t.contact.emailLabel"
      :href="`mailto:${email}`"
    >
      <AppIcon name="mail" :size="24" />
    </a>
  </div>
</template>
