<script setup lang="ts">
import cvUrl from '@/assets/Lebenslauf-Kushtrim-Ramadani.pdf'
import AppIcon from '@/components/AppIcon.vue'
import { email } from '@/data/profile'
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col rounded-[20px] bg-surface-container-lowest p-5 shadow-xs">
    <div class="mb-3 flex items-center gap-3 text-on-surface-variant">
      <AppIcon name="location_on" :size="22" />
      <span class="text-on-surface">{{ t.common.location }}</span>
    </div>
    <div class="mb-5 flex items-center gap-3 text-on-surface-variant">
      <AppIcon name="mail" :size="22" />
      <span class="font-mono text-code-sm break-all text-on-surface">{{ email }}</span>
    </div>
    <a
      class="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-label-md text-on-primary shadow-xs transition-opacity hover:opacity-90"
      :href="cvUrl"
      download="Lebenslauf-Kushtrim-Ramadani.pdf"
    >
      <AppIcon name="download" />
      {{ t.common.downloadCv }}
    </a>
  </div>
</template>
