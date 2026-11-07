<script setup lang="ts">
import type { NamedText } from '@/i18n/projectDetails'

defineProps<{
  title: string
  items: NamedText[]
}>()
</script>

<template>
  <div class="flex flex-col rounded-[20px] bg-surface-container-lowest p-5 shadow-xs lg:p-6">
    <h3 class="mb-4 text-headline-sm text-on-surface">{{ title }}</h3>
    <ul class="flex flex-col gap-4">
      <li v-for="item in items" :key="item.name">
        <div class="mb-0.5 text-label-md font-semibold text-on-surface">{{ item.name }}</div>
        <p v-if="item.text" class="text-body-sm text-on-surface-variant">{{ item.text }}</p>
      </li>
    </ul>
  </div>
</template>
