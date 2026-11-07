<script setup lang="ts">
import SectionHeader from '@/components/SectionHeader.vue'
import { useI18n } from '@/i18n'
import type { ProjectDetails } from '@/i18n/projectDetails'
import FeatureGroupCard from '@/views/Project/components/FeatureGroupCard.vue'

defineProps<{ content: ProjectDetails['whatItDoes'] }>()

const { t } = useI18n()
</script>

<template>
  <section class="bg-surface px-gutter-mobile py-space-2xl md:px-margin lg:py-24">
    <div class="mx-auto w-full max-w-6xl">
      <SectionHeader :title="t.project.whatItDoes" :description="content.intro" />
      <div class="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
        <FeatureGroupCard
          v-for="group in content.groups"
          :key="group.title"
          v-bind="group"
        />
      </div>
    </div>
  </section>
</template>
