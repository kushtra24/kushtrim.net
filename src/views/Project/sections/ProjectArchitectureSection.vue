<script setup lang="ts">
import SectionHeader from '@/components/SectionHeader.vue'
import { useI18n } from '@/i18n'
import type { ProjectDetails } from '@/i18n/projectDetails'
import ArchitectureDiagram from '@/views/Project/components/ArchitectureDiagram.vue'

defineProps<{ content: ProjectDetails['architecture'] }>()

const { t } = useI18n()
</script>

<template>
  <section class="bg-surface-container-low px-gutter-mobile py-space-2xl md:px-margin lg:py-24">
    <div class="mx-auto w-full max-w-6xl">
      <SectionHeader :title="t.project.architecture" :description="content.intro" />
      <ArchitectureDiagram :diagram="content.diagram" />
      <p class="mt-space-lg max-w-2xl text-on-surface-variant md:text-body-lg">{{ content.outro }}</p>
    </div>
  </section>
</template>
