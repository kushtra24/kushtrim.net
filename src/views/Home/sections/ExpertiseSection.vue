<script setup lang="ts">
import SectionHeader from '@/components/SectionHeader.vue'
import { useI18n } from '@/i18n'
import ExpertiseCard from '@/views/Home/components/ExpertiseCard.vue'

const { t } = useI18n()
</script>

<template>
  <section id="stack" class="bg-surface-container-low px-gutter-mobile py-space-2xl md:px-margin lg:py-24">
    <div class="mx-auto w-full max-w-6xl">
      <SectionHeader :title="t.expertise.title" :description="t.expertise.description" />
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ExpertiseCard
          v-for="skill in t.expertise.skills"
          :key="skill.number"
          v-bind="skill"
        />
      </div>
    </div>
  </section>
</template>
