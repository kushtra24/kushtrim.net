<script setup lang="ts">
import SectionHeader from '@/components/SectionHeader.vue'
import { useI18n } from '@/i18n'
import type { ProjectDetails } from '@/i18n/projectDetails'
import DetailTable from '@/views/Project/components/DetailTable.vue'

defineProps<{ content: ProjectDetails['scope'] }>()

const { t } = useI18n()
</script>

<template>
  <section class="bg-surface px-gutter-mobile py-space-2xl md:px-margin lg:py-24">
    <div class="mx-auto w-full max-w-6xl">
      <SectionHeader :title="t.project.scope" :description="content.intro" />
      <DetailTable
        :caption="t.project.scope"
        :headers="[t.project.measure, t.project.value]"
        :rows="content.rows.map(row => [row.measure, row.value])"
      />
    </div>
  </section>
</template>
