<script setup lang="ts">
import SectionHeader from '@/components/SectionHeader.vue'
import { useI18n } from '@/i18n'
import type { ProjectDetails } from '@/i18n/projectDetails'
import DetailTable from '@/views/Project/components/DetailTable.vue'

defineProps<{ content: ProjectDetails['techStack'] }>()

const { t } = useI18n()
</script>

<template>
  <section class="bg-surface-container-low px-gutter-mobile py-space-2xl md:px-margin lg:py-24">
    <div class="mx-auto w-full max-w-6xl">
      <SectionHeader :title="t.project.techStack" :description="content.intro" />
      <DetailTable
        :caption="t.project.techStack"
        :headers="[t.project.area, t.project.technology, t.project.usedFor]"
        :rows="content.rows.map(row => [row.area, row.technology, row.usedFor])"
      />
    </div>
  </section>
</template>
