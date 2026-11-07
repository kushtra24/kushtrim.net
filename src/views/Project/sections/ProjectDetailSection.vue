<script setup lang="ts">
import ProjectPreview from '@/components/ProjectPreview.vue'
import ProjectTags from '@/components/ProjectTags.vue'
import type { Project } from '@/data/projects'
import { useI18n } from '@/i18n'
import ProjectBackLink from '@/views/Project/components/ProjectBackLink.vue'
import ProjectLinkButton from '@/views/Project/components/ProjectLinkButton.vue'

defineProps<{
  project: Project
  overview?: string
}>()

const { t } = useI18n()
</script>

<template>
  <section class="bg-surface-container-low px-gutter-mobile py-space-xl md:px-margin lg:pt-20 lg:pb-24">
    <div class="mx-auto flex w-full max-w-6xl flex-col">
      <ProjectBackLink />
      <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16">
        <div>
          <ProjectTags :tags="t.projects[project.slug].tags" />
          <h1 class="mb-space-md text-headline-lg-mobile tracking-tight text-on-surface md:text-headline-lg">
            {{ t.projects[project.slug].title }}
          </h1>
          <p class="mb-space-lg leading-relaxed text-on-surface-variant md:text-body-lg">
            {{ overview ?? t.projects[project.slug].description }}
          </p>
          <ProjectLinkButton v-if="project.link" :link="project.link" />
        </div>
        <ProjectPreview large :preview="project.preview" />
      </div>
    </div>
  </section>
</template>
