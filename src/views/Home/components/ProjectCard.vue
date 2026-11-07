<script setup lang="ts">
import AppIcon from '@/components/AppIcon.vue'
import ProjectPreview from '@/components/ProjectPreview.vue'
import ProjectTags from '@/components/ProjectTags.vue'
import type { Project } from '@/data/projects'
import { useI18n } from '@/i18n'

defineProps<{ project: Project }>()

const { t } = useI18n()
</script>

<template>
  <article class="flex flex-col rounded-[20px] bg-surface-container-lowest p-5 shadow-xs">
    <ProjectTags :tags="t.projects[project.slug].tags" />
    <h3 class="mb-2 text-headline-sm text-on-surface">{{ t.projects[project.slug].title }}</h3>
    <p class="mb-4 text-body-sm text-on-surface-variant">{{ t.projects[project.slug].description }}</p>
    <div class="mt-auto">
      <ProjectPreview :preview="project.preview" />
      <RouterLink
        class="inline-flex items-center gap-1 text-label-md font-semibold text-on-surface hover:underline"
        :to="{ name: 'project', params: { slug: project.slug } }"
      >
        {{ t.featuredProjects.viewProject }}
        <AppIcon name="arrow_forward" :size="16" />
      </RouterLink>
    </div>
  </article>
</template>
