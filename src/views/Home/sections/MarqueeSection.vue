<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/i18n'
import MarqueeStrip from '@/views/Home/components/MarqueeStrip.vue'

const { t } = useI18n()

// One strip must be wider than the screen, or a gap shows on large monitors before the loop restarts.
const items = computed(() => [...t.value.marquee, ...t.value.marquee, ...t.value.marquee])
</script>

<template>
  <div class="w-full overflow-hidden bg-surface-container-low py-3">
    <div class="flex w-max animate-marquee gap-6 whitespace-nowrap">
      <MarqueeStrip :items="items" />
      <MarqueeStrip :items="items" aria-hidden="true" />
    </div>
  </div>
</template>
