<script setup lang="ts">
import SectionHeader from '@/components/SectionHeader.vue'
import { useI18n } from '@/i18n'
import type { ProjectDetails } from '@/i18n/projectDetails'
import HighlightCard from '@/views/Project/components/HighlightCard.vue'

defineProps<{ content: ProjectDetails['highlights'] }>()

const { t } = useI18n()
</script>

<template>
  <section class="bg-surface px-gutter-mobile py-space-2xl md:px-margin lg:py-24">
    <div class="mx-auto w-full max-w-6xl">
      <SectionHeader :title="t.project.highlights" :description="content.intro" />
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <HighlightCard
          v-for="item in content.items"
          :key="item.name"
          v-bind="item"
        />
      </div>
    </div>
  </section>
</template>
