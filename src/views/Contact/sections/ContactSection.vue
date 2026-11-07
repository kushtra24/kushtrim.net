<script setup lang="ts">
import { useI18n } from '@/i18n'
import EmailCard from '@/views/Contact/components/EmailCard.vue'
import SocialLinks from '@/views/Contact/components/SocialLinks.vue'

const { t } = useI18n()
</script>

<template>
  <footer id="contact" class="bg-surface px-gutter-mobile py-space-2xl md:px-margin lg:py-24">
    <div class="mx-auto grid w-full max-w-6xl grid-cols-1 lg:grid-cols-2 lg:gap-x-16">
      <div class="mb-space-xl flex flex-col lg:mb-0">
        <h2 class="mb-2 text-headline-lg-mobile tracking-tight text-on-surface md:text-headline-lg">{{ t.contact.title }}</h2>
        <p class="text-on-surface-variant md:text-body-lg">{{ t.contact.description }}</p>
      </div>
      <div>
        <EmailCard />
        <SocialLinks />
      </div>
      <div class="pt-space-lg text-center font-mono text-code-sm text-on-surface-variant lg:col-span-2">
        {{ t.contact.footer }}
      </div>
    </div>
  </footer>
</template>
