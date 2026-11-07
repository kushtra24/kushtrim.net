<script setup lang="ts">
// `description` marks a work entry; `note` marks education and certification entries.
defineProps<{
  title: string
  badge: string
  subtitle: string
  description?: string
  note?: string
}>()
</script>

<template>
  <div class="relative flex flex-col rounded-xl bg-surface-container-lowest p-4 shadow-xs">
    <span
      class="absolute top-4 -left-[27px] size-3.5 rounded-full"
      :class="description ? 'bg-primary' : 'bg-outline'"
    />
    <div class="mb-1 flex flex-wrap items-center justify-between gap-1">
      <span class="text-headline-sm font-semibold text-on-surface">{{ title }}</span>
      <span class="rounded-sm bg-surface-container px-2 py-0.5 text-label-eyebrow text-on-surface">{{ badge }}</span>
    </div>
    <div class="text-label-md text-on-surface-variant" :class="description ? 'mb-2' : 'mb-1'">{{ subtitle }}</div>
    <p v-if="description" class="text-body-sm text-on-surface-variant">{{ description }}</p>
    <span v-if="note" class="font-mono text-code-sm text-on-surface-variant">{{ note }}</span>
  </div>
</template>
