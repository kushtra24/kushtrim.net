import type { ProjectDetails } from '@/i18n/projectDetails'

const clinicLab: ProjectDetails = {
  overview: 'Med Direct is a multi-tenant healthcare platform that connects patients with clinics, laboratories and polyclinics, built with the Iraqi market in mind. The public side lets people find medical institutes on a map and retrieve their test results. Behind it, each organization gets its own workspace for patient records, front-desk orders, lab and examination reports, and staff permissions. It is a full-stack application with a Laravel REST API and a server-rendered Nuxt frontend, available in English, Arabic and Kurdish with full right-to-left support, and packaged for deployment with Docker.',
  whatItDoes: {
    intro: 'The platform serves three audiences: the public looking for care, patients who want their results, and medical staff who run the daily work of a clinic or lab.',
    groups: [
      {
        title: 'Built for',
        items: [
          { name: 'Patients and guests', text: '' },
          { name: 'Clinics, laboratories and polyclinics', text: '' },
          { name: 'Front-desk staff, lab technicians and doctors', text: '' },
          { name: 'Organization owners', text: '' },
        ],
      },
      {
        title: 'Public directory',
        items: [
          { name: 'Institute search', text: 'Keyword search ranked by relevance across names, descriptions, specialties and services, with a filter by city or neighborhood.' },
          { name: 'Interactive map', text: 'Search results plotted on a Leaflet map with marker clustering and popups for each institute.' },
          { name: 'Institute profiles', text: 'Public pages with services, opening hours, team, gallery, languages spoken, diplomas and contact details.' },
        ],
      },
      {
        title: 'Patient access',
        items: [
          { name: 'Guest result lookup', text: 'Patients can retrieve finalized lab and examination reports without an account, using their name and a 6-digit access PIN issued by the clinic.' },
          { name: 'Patient accounts', text: 'Registered patients manage their profile and see finalized lab reports linked to their account.' },
          { name: 'Record claiming', text: 'Existing clinic records can be linked to a patient account at sign-up through identity matching, or claimed later by re-verifying name and PIN.' },
          { name: 'Printable reports', text: 'Lab and examination results open as dedicated print layouts that can be printed or saved as PDF.' },
        ],
      },
      {
        title: 'Clinic workspace',
        items: [
          { name: 'Patient management', text: 'Register, search, edit and soft-delete patients, keeping their report history intact after deletion.' },
          { name: 'CSV import', text: 'Bulk import of up to 500 patients per file, with flexible column-name matching and row-level error reporting.' },
          { name: 'Clinical history', text: 'Structured records for allergies, problems, medications, immunizations and vitals on each patient.' },
          { name: 'Order queue', text: 'Front desk logs why a patient came and routes the work to a specific doctor or an unassigned pool; staff can filter by their own orders, unassigned orders or status.' },
          { name: 'Lab and examination results', text: 'Staff enter itemized results with values, status and reference points. Only finalized reports reach patients, and filing a lab report against its order completes that order.' },
          { name: 'Profile change notices', text: 'When a patient updates key details, each linked clinic whose record now differs gets a notice showing old and new values to review.' },
          { name: 'Dashboard', text: 'Daily examinations, new patients this month and recent staff activity at a glance.' },
        ],
      },
      {
        title: 'Organization administration',
        items: [
          { name: 'Staff and permissions', text: 'Owners add staff and titles, while nine individual abilities control what each member can do, with sensitive abilities off by default.' },
          { name: 'Public profile editor', text: 'Rich-text description, images, team members, services, opening hours and map coordinates, with a profile completeness score.' },
        ],
      },
    ],
  },
  architecture: {
    intro: 'Med Direct separates the frontend and backend into two applications that communicate only through a versionable JSON API boundary, so each can be developed and deployed independently.',
    diagram: {
      title: 'Med Direct system overview',
      systems: [
        { name: 'Nuxt 4 frontend', text: 'Server-rendered Vue 3 application with public pages, the patient area, the clinic control panel, print layouts and three languages.' },
        { name: 'Laravel 13 API', text: 'REST API with token authentication, layered authorization, validation, business services and JSON resources.' },
      ],
      channel: 'REST / JSON with Laravel Sanctum bearer tokens',
      flows: [
        { label: 'Searches, logins, patient records, orders and results', direction: 'one-way' },
        { label: 'JSON resources, tokens, effective permissions and validation errors', direction: 'reverse' },
      ],
      shared: { name: 'MySQL 8', text: 'Single database shared by all organizations, with tenant data separated by organization ID and enforced in the API.' },
    },
    outro: 'In production, Docker Compose runs five services. Caddy terminates HTTPS and sends /api, /sanctum and /up traffic to Nginx and PHP-FPM, and everything else to the Nuxt Node server. In development, the Vite proxy forwards API calls to Laravel, which avoids CORS configuration.',
  },
  highlights: {
    intro: 'The most interesting engineering in this project comes from modeling how medical organizations and patients actually work.',
    items: [
      { name: 'Layered authorization', text: 'Route middleware checks organization membership and then a specific ability, while owners implicitly hold every ability. New staff start with front-desk permissions only, so access to patient data must be granted deliberately.' },
      { name: 'Tenant isolation', text: 'Every patient, order and report is scoped to its organization, and a request for another organization\'s record returns not found. Clinics keep independent copies of patient data rather than sharing it.' },
      { name: 'Identity matching at two strictness levels', text: 'Self-service claiming matches on email or on name plus date of birth. Automatic linking during clinic data entry requires an exact match on national ID, full name and date of birth, so staff don\'t link a record to the wrong person because of a common name.' },
      { name: 'Safe claiming flow', text: 'Claiming a found record re-verifies name and PIN rather than trusting a submitted patient ID. Records claimed by another account are rejected with a conflict, and repeating your own claim changes nothing.' },
      { name: 'Change detection across clinics', text: 'A dedicated service compares a patient\'s updated profile with each linked clinic\'s record and raises a notice only where values really differ, ignoring case and whitespace.' },
      { name: 'Sanitized rich text', text: 'Clinic descriptions are rebuilt server-side from a strict tag allowlist with all attributes removed, so the stored HTML can be rendered on public pages.' },
      { name: 'Encrypted access PINs', text: 'Patient access PINs are generated randomly, encrypted at rest and compared in constant time.' },
      { name: 'Real multilingual support', text: 'Around 1,100 translation strings per language, with the page direction switching automatically for Arabic and Kurdish.' },
      { name: 'Automated feature tests', text: 'A feature test suite covers permissions, tenant boundaries, record claiming, CSV import, search ranking and the order workflow.' },
    ],
  },
  techStack: {
    intro: 'The stack uses current versions of mainstream, well-supported frameworks, with few dependencies beyond them.',
    rows: [
      { area: 'Frontend', technology: 'Nuxt 4, Vue 3 (Composition API), JavaScript', usedFor: 'Server-rendered pages, routing, route guards and shared state through composables' },
      { area: 'Styling', technology: 'Tailwind CSS', usedFor: 'Mobile-first responsive interface and a custom design system' },
      { area: 'Internationalization', technology: '@nuxtjs/i18n', usedFor: 'English, Arabic and Kurdish with right-to-left layouts' },
      { area: 'Maps', technology: 'Leaflet, Leaflet.markercluster', usedFor: 'Interactive institute map with clustered markers' },
      { area: 'Rich text', technology: 'Tiptap', usedFor: 'Clinic description editor' },
      { area: 'Icons', technology: 'Font Awesome', usedFor: 'Interface iconography' },
      { area: 'Backend', technology: 'Laravel 13, PHP 8.4', usedFor: 'REST API, validation, business logic and Eloquent data models' },
      { area: 'Authentication', technology: 'Laravel Sanctum', usedFor: 'API token authentication' },
      { area: 'Database', technology: 'MySQL 8', usedFor: 'Relational storage for all tenants' },
      { area: 'Testing', technology: 'PHPUnit 12', usedFor: 'API feature tests' },
      { area: 'Containers', technology: 'Docker, Docker Compose', usedFor: 'Reproducible development and production environments, including a multi-stage frontend build' },
      { area: 'Web servers', technology: 'Caddy 2, Nginx, PHP-FPM, Node.js 22', usedFor: 'HTTPS reverse proxy, compression and application serving' },
    ],
  },
  scope: {
    intro: 'These figures were counted directly from the project\'s source code and Git history.',
    rows: [
      { measure: 'API endpoints', value: '59' },
      { measure: 'API controllers', value: '19' },
      { measure: 'Data models', value: '20' },
      { measure: 'Database migrations', value: '27' },
      { measure: 'Frontend pages', value: '24' },
      { measure: 'Vue components', value: '25' },
      { measure: 'Feature tests', value: '46' },
      { measure: 'Permission abilities', value: '9' },
      { measure: 'Languages', value: '3 (English, Arabic, Kurdish)' },
      { measure: 'Translation strings', value: 'About 1,100 per language' },
      { measure: 'Lines of code', value: 'About 20,500 (frontend 12,500, backend 6,500, tests 1,500)' },
      { measure: 'Development period', value: 'April to September 2026' },
      { measure: 'Commits', value: '38' },
    ],
  },
}

export default clinicLab
