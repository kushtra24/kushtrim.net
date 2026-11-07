<script setup lang="ts">
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col gap-4 rounded-[20px] bg-surface-container-lowest p-6 shadow-xs lg:p-8">
    <p
      v-for="(paragraph, index) in t.profile.bio"
      :key="index"
      class="leading-relaxed text-on-surface md:text-body-lg md:leading-relaxed"
    >
      {{ paragraph }}
    </p>
  </div>
</template>
