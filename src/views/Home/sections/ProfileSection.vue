<script setup lang="ts">
import portrait from '@/assets/img/me.jpeg'
import SectionHeader from '@/components/SectionHeader.vue'
import { useI18n } from '@/i18n'
import ProfileBioCard from '@/views/Home/components/ProfileBioCard.vue'
import ProfileContactCard from '@/views/Home/components/ProfileContactCard.vue'

const { t } = useI18n()
</script>

<template>
  <section id="profile" class="bg-surface px-gutter-mobile py-space-2xl md:px-margin lg:py-24">
    <div class="mx-auto w-full max-w-6xl">
      <SectionHeader
        :eyebrow="t.profile.eyebrow"
        :title="t.profile.title"
        :description="t.profile.description"
      />
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:grid-rows-[auto_1fr]">
        <div class="aspect-4/3 w-full overflow-hidden rounded-[20px] bg-surface-container-highest shadow-xs">
          <img
            class="size-full object-cover object-[center_20%]"
            alt="Kushtrim Ramadani"
            loading="lazy"
            :src="portrait"
          >
        </div>
        <ProfileBioCard class="lg:col-start-2 lg:row-span-2 lg:row-start-1" />
        <ProfileContactCard />
      </div>
    </div>
  </section>
</template>
