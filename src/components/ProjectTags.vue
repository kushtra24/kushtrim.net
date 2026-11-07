<script setup lang="ts">
defineProps<{ tags: string[] }>()
</script>

<template>
  <div class="mb-3 flex flex-wrap gap-2">
    <span
      v-for="tag in tags"
      :key="tag"
      class="rounded-sm bg-surface-container px-2 py-0.5 font-mono text-code-sm text-on-surface"
    >{{ tag }}</span>
  </div>
</template>
