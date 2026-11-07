<script setup lang="ts">
import { useI18n } from '@/i18n'
import ContactSection from '@/views/Contact/sections/ContactSection.vue'

const { t } = useI18n()
</script>

<template>
  <div class="flex min-h-dvh w-full flex-col justify-center text-on-surface">
    <h1 class="sr-only">{{ t.contact.pageTitle }}</h1>
    <ContactSection />
  </div>
</template>
