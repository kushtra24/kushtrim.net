<script setup lang="ts">
import { computed } from 'vue'
import { projects } from '@/data/projects'
import type { ProjectSlug } from '@/data/projects'
import { useI18n } from '@/i18n'
import type { ProjectDetails } from '@/i18n/projectDetails'
import ContactSection from '@/views/Contact/sections/ContactSection.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ProjectArchitectureSection from '@/views/Project/sections/ProjectArchitectureSection.vue'
import ProjectDetailSection from '@/views/Project/sections/ProjectDetailSection.vue'
import ProjectHighlightsSection from '@/views/Project/sections/ProjectHighlightsSection.vue'
import ProjectScopeSection from '@/views/Project/sections/ProjectScopeSection.vue'
import ProjectTechStackSection from '@/views/Project/sections/ProjectTechStackSection.vue'
import ProjectWhatItDoesSection from '@/views/Project/sections/ProjectWhatItDoesSection.vue'

const props = defineProps<{ slug: string }>()

const { t } = useI18n()

const project = computed(() => projects.find(item => item.slug === props.slug))

// Not every project has details yet; those show only the top section.
const details = computed(() => {
  const allDetails: Partial<Record<ProjectSlug, ProjectDetails>> = t.value.projectDetails
  return project.value && allDetails[project.value.slug]
})
</script>

<template>
  <div v-if="project" class="flex w-full flex-col text-on-surface">
    <ProjectDetailSection :project="project" :overview="details?.overview" />
    <template v-if="details">
      <ProjectWhatItDoesSection :content="details.whatItDoes" />
      <ProjectArchitectureSection :content="details.architecture" />
      <ProjectHighlightsSection :content="details.highlights" />
      <ProjectTechStackSection :content="details.techStack" />
      <ProjectScopeSection :content="details.scope" />
    </template>
    <ContactSection />
  </div>
  <NotFoundView v-else />
</template>
