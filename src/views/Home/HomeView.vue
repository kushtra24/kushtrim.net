<script setup lang="ts">
import ContactSection from '@/views/Contact/sections/ContactSection.vue'
import ExpertiseSection from '@/views/Home/sections/ExpertiseSection.vue'
import FeaturedProjectsSection from '@/views/Home/sections/FeaturedProjectsSection.vue'
import HeroSection from '@/views/Home/sections/HeroSection.vue'
import JourneySection from '@/views/Home/sections/JourneySection.vue'
import MarqueeSection from '@/views/Home/sections/MarqueeSection.vue'
import ProfileSection from '@/views/Home/sections/ProfileSection.vue'
</script>

<template>
  <div class="flex w-full flex-col text-on-surface">
    <HeroSection />
    <MarqueeSection />
    <FeaturedProjectsSection />
    <JourneySection />
    <ProfileSection />
    <ExpertiseSection />
    <ContactSection />
  </div>
</template>
