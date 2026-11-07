<script setup lang="ts">
import SiteControls from '@/components/SiteControls.vue'
import { useTheme } from '@/composables/useTheme'

// Applies the saved or system theme and keeps it in sync.
useTheme()
</script>

<template>
  <SiteControls />
  <main class="pt-safe pb-safe relative flex min-h-screen w-full flex-col bg-surface">
    <RouterView />
  </main>
</template>
