<script setup lang="ts">
import type { ArchitectureDiagramData } from '@/i18n/projectDetails'

defineProps<{ diagram: ArchitectureDiagramData }>()

const arrows = { 'one-way': '→', 'reverse': '←', 'two-way': '↔' }
</script>

<template>
  <figure class="rounded-[20px] bg-surface-container-lowest p-5 shadow-xs lg:p-6">
    <!-- Stacks on small screens with the arrows turned to vertical; from md the systems sit side by side. -->
    <div class="grid grid-cols-1 items-stretch gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
      <div class="rounded-xl bg-surface-container-high p-4">
        <div class="text-label-md font-semibold text-on-surface">{{ diagram.systems[0].name }}</div>
        <p class="mt-1 text-body-sm text-on-surface-variant">{{ diagram.systems[0].text }}</p>
      </div>
      <div class="flex flex-col justify-center gap-3 py-1 text-center">
        <div
          v-for="flow in diagram.flows"
          :key="flow.label"
          class="flex flex-col items-center"
        >
          <span class="text-body-sm text-on-surface">{{ flow.label }}</span>
          <span aria-hidden="true" class="rotate-90 font-mono text-headline-sm text-on-surface md:rotate-0">
            {{ arrows[flow.direction] }}
          </span>
        </div>
        <span class="font-mono text-code-sm text-on-surface-variant">{{ diagram.channel }}</span>
      </div>
      <div class="rounded-xl bg-surface-container-high p-4">
        <div class="text-label-md font-semibold text-on-surface">{{ diagram.systems[1].name }}</div>
        <p class="mt-1 text-body-sm text-on-surface-variant">{{ diagram.systems[1].text }}</p>
      </div>
      <div class="rounded-xl border border-dashed border-outline p-4 text-center md:col-span-3">
        <div class="text-label-md font-semibold text-on-surface">{{ diagram.shared.name }}</div>
        <p class="mt-1 text-body-sm text-on-surface-variant">{{ diagram.shared.text }}</p>
      </div>
    </div>
    <figcaption class="mt-4 text-body-sm text-on-surface-variant">{{ diagram.title }}</figcaption>
  </figure>
</template>
