<script setup lang="ts">
defineProps<{
  number: string
  title: string
  description: string
}>()
</script>

<template>
  <div class="flex flex-col rounded-[20px] bg-surface-container-lowest p-5 shadow-xs">
    <div class="mb-2 font-mono text-code-sm font-bold text-on-surface-variant">{{ number }}</div>
    <h3 class="mb-2 text-headline-sm text-on-surface">{{ title }}</h3>
    <p class="text-body-sm text-on-surface-variant">{{ description }}</p>
  </div>
</template>
