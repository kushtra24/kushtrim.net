<script setup lang="ts">
// A new icon must also be added to the Material Symbols font link in index.html.
withDefaults(defineProps<{
  name: 'arrow_back' | 'arrow_forward' | 'check' | 'check_circle' | 'content_copy' | 'download'
    | 'expand_less' | 'expand_more' | 'location_on' | 'mail' | 'share' | 'shop' | 'terminal'
  size?: number
}>(), { size: 18 })
</script>

<template>
  <!-- Inline size: Google's unlayered font-size would beat a Tailwind text-[..] utility -->
  <span
    class="material-symbols-outlined"
    aria-hidden="true"
    translate="no"
    :style="{ fontSize: `${size}px` }"
  >{{ name }}</span>
</template>
