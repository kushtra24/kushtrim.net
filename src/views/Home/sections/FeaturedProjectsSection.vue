<script setup lang="ts">
import SectionHeader from '@/components/SectionHeader.vue'
import { projects } from '@/data/projects'
import { useI18n } from '@/i18n'
import ProjectCard from '@/views/Home/components/ProjectCard.vue'

const { t } = useI18n()
</script>

<template>
  <section id="works" class="bg-surface px-gutter-mobile py-space-2xl md:px-margin lg:py-24">
    <div class="mx-auto w-full max-w-6xl">
      <SectionHeader :title="t.featuredProjects.title" :description="t.featuredProjects.description" />
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ProjectCard
          v-for="project in projects"
          :key="project.slug"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>
