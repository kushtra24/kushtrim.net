<script setup lang="ts">
import AppIcon from '@/components/AppIcon.vue'
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>

<template>
  <RouterLink
    class="mb-space-lg inline-flex min-h-11 items-center gap-1 self-start text-label-md font-semibold text-on-surface hover:underline"
    :to="{ name: 'home', hash: '#works' }"
  >
    <AppIcon name="arrow_back" :size="16" />
    {{ t.project.allProjects }}
  </RouterLink>
</template>
