<script setup lang="ts">
import AppIcon from '@/components/AppIcon.vue'
import type { Project } from '@/data/projects'
import { useI18n } from '@/i18n'

defineProps<{ link: NonNullable<Project['link']> }>()

const { t } = useI18n()
</script>

<template>
  <a
    class="mb-space-lg inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-label-md text-on-primary shadow-xs transition-opacity hover:opacity-90"
    rel="noopener noreferrer"
    target="_blank"
    :href="link.url"
  >
    <AppIcon :name="link.kind === 'github' ? 'terminal' : 'shop'" :size="20" />
    {{ link.kind === 'github' ? t.project.viewOnGithub : t.featuredProjects.googlePlay }}
  </a>
</template>
