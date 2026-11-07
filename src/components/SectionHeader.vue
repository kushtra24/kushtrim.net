<script setup lang="ts">
defineProps<{
  title: string
  description: string
  eyebrow?: string
}>()
</script>

<template>
  <div class="mb-space-xl flex max-w-2xl flex-col">
    <span
      v-if="eyebrow"
      class="mb-1 text-label-eyebrow tracking-widest text-on-surface-variant uppercase"
    >{{ eyebrow }}</span>
    <h2 class="mb-2 text-headline-md tracking-tight text-on-surface md:text-headline-lg">{{ title }}</h2>
    <p class="text-on-surface-variant md:text-body-lg">{{ description }}</p>
  </div>
</template>
