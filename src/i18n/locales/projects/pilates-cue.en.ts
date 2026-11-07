import type { ProjectDetails } from '@/i18n/projectDetails'

const pilatesCue: ProjectDetails = {
  overview: 'Pilates Cue is an Android and Wear OS app for building Pilates classes, following them with a guided timer and planning the week. A running class stays in sync between phone and watch, so either device can pause, skip or stop it.',
  whatItDoes: {
    intro: 'The app lets someone build a Pilates class once, then run it hands-free from a phone or a watch. All class data lives on the device, with no account or backend.',
    groups: [
      {
        title: 'On the phone',
        items: [
          { name: 'Class builder', text: 'Pick exercises, set a time per exercise, add breaks, equipment tags, a difficulty level and notes. The builder warns when exercises exceed the class length, or can adjust the total automatically.' },
          { name: 'Exercise library', text: '31 built-in exercises with images, grouped into Mat, Reformer and Cadillac. Users can add their own with a photo, category, difficulty, speed and position.' },
          { name: 'Guided timer', text: 'A countdown with beeps, automatic breaks, swipe navigation between exercises and a screen that stays on. Exercises can be reordered by drag and drop before a class starts.' },
          { name: 'Weekly planner', text: 'Schedule classes on a calendar and add notes per day. Past plans remove themselves after 24 hours.' },
          { name: 'Home and browsing', text: 'Recently started and upcoming classes, plus filters by difficulty.' },
          { name: 'First-run experience', text: 'A skippable onboarding tour that can be reopened from the profile, and a rating prompt after every three workouts.' },
        ],
      },
      {
        title: 'On the watch',
        items: [
          { name: 'Synced classes', text: 'Every class created on the phone appears on the watch automatically.' },
          { name: 'Watch timer', text: 'The full guided timer, adding vibration to the beeps, with swipe navigation on a round screen.' },
          { name: 'Two-way control', text: 'Start a class on the phone and it opens on the watch. Pause, skip or stop on either device and the other follows.' },
          { name: 'Tile', text: 'A watch tile for starting a class, which switches to the current exercise during a workout.' },
          { name: 'Ongoing Activity', text: 'A running class shows a live countdown on the watch face and in recents.' },
        ],
      },
    ],
  },
  architecture: {
    intro: 'The project has three Gradle modules: a phone app, a watch app and a shared library that holds the sync models and workout logic. The phone owns the class data, while live workout state can change on either device.',
    diagram: {
      title: 'System architecture: phone app, watch app and the data they exchange',
      systems: [
        { name: 'Phone app', text: 'Owns the class data in its Room database' },
        { name: 'Watch app', text: 'Class list, guided timer, tile and Ongoing Activity' },
      ],
      channel: 'Wearable Data Layer API',
      flows: [
        { label: 'Class lists', direction: 'one-way' },
        { label: 'Live workout state', direction: 'two-way' },
      ],
      shared: { name: 'Shared library', text: 'Sync models and workout logic' },
    },
    outro: 'Class lists flow one way, from the phone\'s database to the watch. Workout state flows both ways, and each screen simply renders the controller\'s latest state.',
  },
  highlights: {
    intro: 'The hardest problem was keeping one live countdown correct on two devices that can disconnect at any time.',
    items: [
      { name: 'A timer that survives sync delays', text: 'Syncing every tick would be slow and battery-heavy. The shared state stores the time remaining at a timestamp, so each device works out the live countdown from its own clock.' },
      { name: 'Conflict handling without a server', text: 'Each device writes its own data item, and the newest update wins. Older updates are ignored, including ones that arrive after a stop, so a late message cannot revive a finished class.' },
      { name: 'Recovery from abandoned workouts', text: 'A class untouched for 3 hours counts as abandoned, so a killed app does not leave a phantom workout running on the other device.' },
      { name: 'One state model, two interfaces', text: 'Pause, skip, exercise changes and break transitions are pure functions on an immutable state class in a shared module. Phone and watch screens only render that state and send actions.' },
      { name: 'Safe data evolution', text: 'The Room database has reached schema version 8 through seven hand-written migrations. They preserve user data through changes such as converting minutes to seconds and moving schedules into their own table.' },
      { name: 'Reactive data flow', text: 'Screens observe database changes through Kotlin Flow, and the same stream pushes updated classes to the watch when they change.' },
      { name: 'Custom interaction components', text: 'The number wheel picker and the long-press drag-to-reorder list are built directly on Compose gesture and layout APIs.' },
      { name: 'Production release setup', text: 'Release builds use R8 code and resource shrinking. Phone and watch ship under one application ID, as Google Play expects for a paired Wear OS app.' },
    ],
  },
  techStack: {
    intro: 'The project is 100% Kotlin, with a declarative UI on both devices and current Android tooling.',
    rows: [
      { area: 'Language', technology: 'Kotlin 2.3, Coroutines, Flow', usedFor: 'All app logic, async work and reactive data' },
      { area: 'Phone UI', technology: 'Jetpack Compose, Material 3', usedFor: 'Every phone screen and the custom components' },
      { area: 'Watch UI', technology: 'Compose for Wear OS, Material 3', usedFor: 'Watch class list and timer' },
      { area: 'Watch surfaces', technology: 'Wear Tiles, ProtoLayout, Ongoing Activity', usedFor: 'Tile and the live workout indicator' },
      { area: 'Device sync', technology: 'Wearable Data Layer API', usedFor: 'Class lists and live workout state' },
      { area: 'Serialization', technology: 'kotlinx.serialization', usedFor: 'JSON payloads between phone and watch' },
      { area: 'Local storage', technology: 'Room (SQLite), KSP', usedFor: '7 tables with relations, foreign keys and migrations' },
      { area: 'Images', technology: 'Coil', usedFor: 'Exercise images, including user photos' },
      { area: 'Analytics', technology: 'Firebase Analytics', usedFor: 'Screen views, workout starts and prompt choices' },
      { area: 'Monetization', technology: 'Google AdMob', usedFor: 'Banner, native and app-open ads' },
      { area: 'Build', technology: 'Gradle Kotlin DSL, Android Gradle Plugin 9.5, R8', usedFor: 'Multi-module builds and release optimization' },
    ],
  },
  scope: {
    intro: 'The app grew from first commit to a Wear OS sync release in about five months.',
    rows: [
      { measure: 'Development period', value: 'May 2026 to November 2026' },
      { measure: 'Commits', value: '50' },
      { measure: 'Kotlin code', value: 'About 12,600 lines in 76 files' },
      { measure: 'Gradle modules', value: '3 (phone app, watch app, shared library)' },
      { measure: 'Phone support', value: 'Android 7.0 and up (API 24)' },
      { measure: 'Watch support', value: 'Wear OS 3 and up (API 30)' },
    ],
  },
}

export default pilatesCue
