<script setup lang="ts">
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>

<template>
  <div class="flex min-h-dvh flex-col items-center justify-center gap-4 px-gutter-mobile text-center">
    <h1 class="text-headline-lg-mobile text-on-surface">{{ t.notFound.title }}</h1>
    <RouterLink class="text-label-md font-semibold text-on-surface hover:underline" :to="{ name: 'home' }">
      {{ t.notFound.backHome }}
    </RouterLink>
  </div>
</template>
