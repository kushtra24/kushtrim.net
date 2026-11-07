<script setup lang="ts">
import type { ProjectPreviewData } from '@/data/projects'
import { useI18n } from '@/i18n'

// `large` shows images at their full aspect ratio, for the project page.
defineProps<{
  preview: ProjectPreviewData
  large?: boolean
}>()

const { t } = useI18n()

const waveBars = [
  { height: 'h-3', delay: '0ms' },
  { height: 'h-7', delay: '150ms' },
  { height: 'h-5', delay: '300ms' },
  { height: 'h-8', delay: '75ms' },
  { height: 'h-4', delay: '200ms' },
  { height: 'h-6', delay: '400ms' },
  { height: 'h-2', delay: '120ms' },
]
</script>

<template>
  <div v-if="preview.kind === 'agent'" class="mb-4 flex flex-col gap-3 rounded-xl bg-surface-container-high p-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="relative flex size-2">
          <span class="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-75" />
          <span class="relative inline-flex size-2 rounded-full bg-success" />
        </span>
        <span class="text-label-eyebrow text-on-surface">{{ t.preview.agentStatus }}</span>
      </div>
      <span class="font-mono text-code-sm text-on-surface-variant">{{ preview.timer }}</span>
    </div>
    <div class="flex items-center justify-center gap-1 rounded-lg bg-surface-container-lowest py-3">
      <span
        v-for="bar in waveBars"
        :key="bar.delay"
        class="w-1 animate-pulse rounded-full bg-on-surface"
        :class="bar.height"
        :style="{ animationDelay: bar.delay }"
      />
    </div>
    <div class="flex flex-col gap-1 rounded-lg bg-surface-container-lowest p-2.5">
      <span class="text-label-eyebrow text-on-surface-variant uppercase">{{ t.preview.suggestionLabel }}</span>
      <p class="text-body-sm text-on-surface">{{ t.preview.suggestion }}</p>
    </div>
  </div>

  <div
    v-else-if="preview.kind === 'json'"
    class="mb-4 overflow-x-auto rounded-xl bg-surface-container-high p-3 font-mono text-code-sm text-on-surface"
  >
    <div class="mb-2 flex items-center justify-between pb-2 text-on-surface-variant">
      <span>{{ preview.fileName }}</span>
      <span class="text-success">{{ t.preview.validated }}</span>
    </div>
    <pre class="font-mono">{{ preview.code }}</pre>
  </div>

  <div
    v-else-if="preview.kind === 'image'"
    class="mb-4 overflow-hidden rounded-xl shadow-xs"
    :class="large ? 'aspect-512/279' : 'h-44'"
  >
    <img
      class="size-full object-cover"
      loading="lazy"
      :src="preview.src"
      :alt="t.preview.imageAlt[preview.altKey]"
    >
  </div>

  <div v-else class="mb-4 grid grid-cols-3 gap-2 rounded-xl bg-surface-container-high p-3">
    <div
      v-for="(screen, index) in t.preview.phoneScreens"
      :key="index"
      class="flex aspect-9/16 flex-col justify-between rounded-lg bg-surface-container-lowest p-2 shadow-xs"
    >
      <div class="mx-auto h-1.5 w-6 rounded-full bg-surface-container-highest" />
      <div v-if="index === 1" class="my-auto space-y-1">
        <div class="mx-auto mb-1 size-3 rounded-full bg-primary" />
        <div class="h-1.5 w-full rounded-sm bg-surface-container-highest" />
      </div>
      <div v-else class="my-auto space-y-1">
        <div class="h-2 w-full rounded-sm bg-surface-container-highest" />
        <div class="h-2 rounded-sm bg-surface-container-highest" :class="index === 0 ? 'w-3/4' : 'w-1/2'" />
      </div>
      <span class="text-center text-[9px] leading-4 font-medium text-on-surface-variant">{{ screen }}</span>
    </div>
  </div>
</template>
