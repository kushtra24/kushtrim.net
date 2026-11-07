<script setup lang="ts">
defineProps<{
  name: string
  text: string
}>()
</script>

<template>
  <div class="flex flex-col rounded-[20px] bg-surface-container-lowest p-5 shadow-xs">
    <h3 class="mb-2 text-headline-sm text-on-surface">{{ name }}</h3>
    <p class="text-body-sm text-on-surface-variant">{{ text }}</p>
  </div>
</template>
