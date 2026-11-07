<script setup lang="ts">
defineProps<{ items: string[] }>()
</script>

<template>
  <span class="flex items-center gap-6 font-mono text-code-sm tracking-wide text-on-surface-variant">
    <template v-for="(item, index) in items" :key="index">
      <span>{{ item }}</span>
      <span aria-hidden="true">•</span>
    </template>
  </span>
</template>
