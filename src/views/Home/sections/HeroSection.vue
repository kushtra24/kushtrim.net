<script setup lang="ts">
import portrait from '@/assets/img/me.jpeg'
import AppIcon from '@/components/AppIcon.vue'
import { useI18n } from '@/i18n'
import { githubUrl, linkedinUrl } from '@/data/profile'

const { t } = useI18n()
</script>

<template>
  <section class="bg-surface px-gutter-mobile pt-20 pb-space-xl md:px-margin lg:pt-28 lg:pb-space-2xl">
    <div class="mx-auto grid w-full max-w-6xl grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-x-16">
      <div class="lg:self-end">
        <h1 class="mb-space-md text-headline-lg-mobile tracking-tight text-on-surface md:text-headline-lg xl:text-display">
          {{ t.hero.title }}
        </h1>
        <p class="mb-space-lg leading-relaxed text-on-surface-variant md:text-body-lg">
          {{ t.common.tagline }}
        </p>
      </div>
      <div class="relative mx-auto mb-space-xl aspect-square w-full max-w-[340px] overflow-hidden rounded-[20px] bg-surface-container-highest shadow-md lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mb-0 lg:max-w-none">
        <img
          class="size-full object-cover"
          :alt="t.hero.portraitAlt"
          :src="portrait"
        >
      </div>
      <div class="flex w-full flex-col gap-3 sm:flex-row lg:self-start">
        <a
          class="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-center text-label-md text-on-primary shadow-xs transition-opacity hover:opacity-90 active:opacity-80 sm:w-auto"
          :href="githubUrl"
          target="_blank"
        >
          <AppIcon name="terminal" />
          {{ t.common.github }}
        </a>
        <a
          class="flex w-full items-center justify-center gap-2 rounded-lg bg-surface-container-low px-6 py-3 text-center text-label-md text-on-surface transition-colors hover:bg-surface-container active:bg-surface-container sm:w-auto"
          :href="linkedinUrl"
          target="_blank"
        >
          <AppIcon name="share" />
          {{ t.common.linkedin }}
        </a>
      </div>
    </div>
  </section>
</template>
