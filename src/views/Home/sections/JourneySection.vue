<script setup lang="ts">
import { ref } from 'vue'
import AppIcon from '@/components/AppIcon.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import { useI18n } from '@/i18n'
import JourneyCard from '@/views/Home/components/JourneyCard.vue'

const { t } = useI18n()

const isExpanded = ref(true)
</script>

<template>
  <section id="journey" class="bg-surface-container-low px-gutter-mobile py-space-2xl md:px-margin lg:py-24">
    <div class="mx-auto flex w-full max-w-6xl flex-col">
      <SectionHeader :title="t.journey.title" :description="t.journey.description" />
      <!-- One timeline on small screens; two columns from lg, where education is always visible. -->
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-x-12">
        <div
          class="relative flex flex-col gap-6 pl-6 before:absolute before:top-2 before:left-2 before:w-0.5 before:bg-surface-container-highest lg:before:bottom-2"
          :class="isExpanded ? 'before:-bottom-8' : 'before:bottom-2'"
        >
          <JourneyCard
            v-for="item in t.journey.experience"
            :key="item.title"
            v-bind="item"
          />
        </div>
        <div
          id="expanded-journey"
          class="relative flex-col gap-6 pl-6 before:absolute before:top-2 before:bottom-2 before:left-2 before:w-0.5 before:bg-surface-container-highest lg:flex"
          :class="isExpanded ? 'flex' : 'hidden'"
        >
          <JourneyCard
            v-for="item in t.journey.education"
            :key="item.title"
            v-bind="item"
          />
        </div>
      </div>
      <button
        aria-controls="expanded-journey"
        class="mt-6 flex items-center justify-center gap-2 self-center rounded-lg bg-surface-container-highest px-4 py-2 text-label-md text-on-surface transition-colors lg:hidden"
        type="button"
        :aria-expanded="isExpanded"
        @click="isExpanded = !isExpanded"
      >
        <span>{{ isExpanded ? t.journey.showLess : t.journey.showMore }}</span>
        <AppIcon :name="isExpanded ? 'expand_less' : 'expand_more'" />
      </button>
    </div>
  </section>
</template>
