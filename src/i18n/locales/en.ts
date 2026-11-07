import pilatesCue from '@/i18n/locales/projects/pilates-cue.en'
import clinicLab from '@/i18n/locales/projects/clinic-lab.en'
import smartLager from '@/i18n/locales/projects/smart-lager.en'

const en = {
  meta: {
    title: 'Kushtrim Ramadani',
    description: 'Kushtrim Ramadani — Senior Frontend & Emerging Tech Lead building accessible, scalable frontends and agentic AI tools.',
  },
  controls: {
    switchLanguage: 'Switch language to German',
    toggleTheme: 'Toggle color mode',
  },
  common: {
    downloadCv: 'Download CV',
    getInTouch: 'Get in touch',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    location: 'Vienna, Austria',
    tagline: 'I like building things; it makes me happy. This is a presentation of what I do and who I am.',
  },
  hero: {
    title: 'Software engineer',
    portraitAlt: 'Kushtrim Ramadani - Senior Frontend & Tech Lead',
  },
  marquee: ['Vue.js 3', 'TypeScript', 'Web Accessibility', 'Agentic AI', 'LangGraph', 'Design Systems', 'Laravel', 'Android', 'Scrum'],
  featuredProjects: {
    title: 'Featured projects',
    description: 'From multi-agent AI systems to business web apps and native mobile, built with a focus on usability, accessibility and clean architecture.',
    viewProject: 'View more',
    googlePlay: 'Get it on Google Play',
  },
  projects: {
    'ai-interview-assistant': {
      title: 'AI Interview Assistant',
      tags: ['Agentic AI', 'LLM', 'Career Tech'],
      description: 'Agentic AI job interview assistant that trains you beforehand, helps you stay focused while answering questions in real-time, and gives structured post-interview feedback.',
    },
    'multi-agent-pdf-job-ad-parser': {
      title: 'Multi-Agent PDF Job Ad Parser',
      tags: ['Multi-Agent', 'LangGraph', 'Data Extraction'],
      description: 'Specialized multi-agent system built with LangGraph that ingests raw PDF job ads and extracts structured JSON schemas with human-in-the-loop verification.',
    },
    'warehouse-management-app': {
      title: 'Warehouse Management App',
      tags: ['Web App', 'Invoicing', 'SMB'],
      description: 'Warehouse management web app for small Swiss businesses that manages products, suppliers and clients, and turns each shipment into an invoice with a Swiss QR-bill.',
    },
    'lab-clinic-management-app': {
      title: 'Lab & Clinic Management App',
      tags: ['Web App', 'Healthcare', 'Multi-tenant'],
      description: 'Multi-tenant healthcare platform connecting patients with clinics and laboratories, with patient records, front-desk orders, and lab and examination reports.',
    },
    'pilates-cue': {
      title: 'Pilates Cue',
      tags: ['Android', 'Wear OS', 'Fitness'],
      description: 'Android and Wear OS app for building Pilates classes, following them with a guided timer and planning the week.',
    },
    'zenith-tasks-android': {
      title: 'Zenith Tasks Android',
      tags: ['Android', 'Native', 'Mobile'],
      description: 'Native Android app built end-to-end with Jetpack Compose & Kotlin, published on Google Play Store.',
    },
  },
  projectDetails: {
    'pilates-cue': pilatesCue,
    'lab-clinic-management-app': clinicLab,
    'warehouse-management-app': smartLager,
  },
  preview: {
    agentStatus: 'Agent Reasoning Active',
    suggestionLabel: 'Real-time Suggestion',
    suggestion: '“Highlight your experience coordinating frontend modular refactors across distributed cross-functional teams.”',
    validated: '✓ validated',
    imageAlt: {
      warehouse: 'Logistics dashboard with real-time inventory bin levels and barcode scanner statuses',
      clinic: 'Medical records dashboard with synchronized calendar schedules and lab metrics',
      pilates: 'Three Pilates Cue screens: the session list, the guided timer and the new session form',
    },
    phoneScreens: ['Today', 'Sprint', 'Settings'],
  },
  project: {
    allProjects: 'All projects',
    viewOnGithub: 'View on GitHub',
    whatItDoes: 'What it does',
    architecture: 'Architecture',
    highlights: 'Engineering highlights',
    techStack: 'Tech stack',
    scope: 'Project scope',
    area: 'Area',
    technology: 'Technology',
    usedFor: 'Used for',
    measure: 'Measure',
    value: 'Value',
  },
  journey: {
    title: 'My journey',
    description: 'From fullstack development to frontend leadership and agentic AI.',
    showMore: 'Show more',
    showLess: 'Show less',
    experience: [
      {
        title: 'Unicornis (Norway)',
        badge: 'Contract',
        subtitle: 'Lead Frontend Developer • 2026',
        description: 'Spearheaded a modular micro-frontend architecture for a large-scale event web application.',
      },
      {
        title: 'karriere.at',
        badge: 'Full Time',
        subtitle: 'Web Engineer (Frontend) • 08/2024 – 08/2026',
        description: 'Built Vue.js frontends and Laravel backends and engineered a multi-agent LangGraph system analyzing job postings with human-in-the-loop review.',
      },
      {
        title: 'ISHAP',
        badge: 'Full Time',
        subtitle: 'Fullstack Developer • 01/2021 – 08/2024',
        description: 'Built a “Bauwerksbuch” (statutory building record) for the Austrian construction sector using PHP and JavaScript.',
      },
      {
        title: 'AVL',
        badge: 'Full Time',
        subtitle: 'Fullstack Developer • 01/2018 – 08/2021',
        description: 'Built a proof of concept for a major German car manufacturer and a contract management system in Laravel and Angular, and expanded the frontend component library.',
      },
      {
        title: 'BEO',
        badge: 'Full Time',
        subtitle: 'Fullstack Developer • 01/2016 – 08/2018',
        description: 'Further developed and maintained a clinic management system in Laravel, jQuery and Vue.js for non-governmental organizations that support children with cleft lip and palate.',
      },
    ],
    education: [
      {
        title: 'UB Graz',
        badge: 'Education',
        subtitle: 'Digitalisierungsmanagement (Digitalization Management)',
        note: 'Ongoing academic study',
      },
      {
        title: 'Scrum.org',
        badge: 'Certification',
        subtitle: 'Professional Scrum Master I (PSM I)',
        note: 'Credential earned 2023',
      },
      {
        title: 'Gehirngerecht.digital',
        badge: 'Training',
        subtitle: 'Digital Accessibility Workshop',
        note: 'Completed 02/2026',
      },
      {
        title: 'Bachelor in Computer Science',
        badge: 'Education',
        subtitle: 'Bachelor’s degree in computer science, majoring in software development',
        note: 'Completed 2015',
      },
    ],
  },
  profile: {
    eyebrow: 'Profile',
    title: 'I am Kushtrim Ramadani',
    description: 'Frontend engineer, father, and UI/UX and personality psychology enthusiast.',
    bio: [
      'With over a decade of production web delivery, I focus on the intersection where architectural stability meets exceptional human experience. My work spans high-concurrency Vue and TypeScript codebases, resilient PHP/Laravel platforms, and agentic AI systems.',
      'I am a fierce advocate for inclusive design, standardizing WCAG 2.1 AA/AAA compliance across developer workflows. Lately, I have been architecting autonomous agentic AI tools using LangGraph to supercharge business productivity while keeping humans in the loop.',
      'My focus is cultivating psychological safety, unblocking engineers through actionable architectural RFCs, and mentoring people to build code they are proud of.',
    ],
  },
  expertise: {
    title: 'Expertise & skills',
    description: 'Disciplined craftsmanship across web systems, accessibility standards, and modern AI orchestration.',
    skills: [
      {
        number: '01',
        title: 'Frontend Engineering',
        description: 'Vue.js 3 (Composition API, Pinia), TypeScript, Vite, Component-Driven Design Systems, State Architecture & Performance Tuning.',
      },
      {
        number: '02',
        title: 'Web Accessibility',
        description: 'WCAG 2.1 AA/AAA compliance, WAI-ARIA authoring practices, Screen Reader testing (NVDA, VoiceOver), and Keyboard navigation paradigms.',
      },
      {
        number: '03',
        title: 'Agentic AI',
        description: 'LangGraph, Python, Multi-Agent Orchestration, LLM integrations, and robust Human-in-the-Loop evaluation workflows.',
      },
      {
        number: '04',
        title: 'Backend & Mobile',
        description: 'PHP 8, Laravel, REST APIs, GraphQL, alongside Native Android engineering with Kotlin and Jetpack Compose.',
      },
      {
        number: '05',
        title: 'Leadership & Agile',
        description: 'Scrum (PSM I certified), Tech Lead principles, Architecture RFCs, Code Mentorship, Sprint planning, and cross-functional alignment.',
      },
      {
        number: '06',
        title: 'Digitalization Management',
        description: 'E-Strategy, Marketing and Sales, Enterprise Information Systems, Databases and Cloud Technologies, Communication and Leadership, Human Resources, Accounting and Finance, Information Security and Data Protection, Quality Management, and Project Management.',
      },
    ],
  },
  contact: {
    pageTitle: 'Contact',
    title: 'Let\'s work together',
    description: 'Looking for a frontend lead who cares about code quality, accessibility and people? Let\'s talk.',
    directEmail: 'Direct email',
    copyEmail: 'Copy Email',
    copyEmailLabel: 'Copy email address',
    copied: 'Copied!',
    copiedToast: 'Email copied to clipboard!',
    linkedinLabel: 'LinkedIn profile',
    githubLabel: 'GitHub profile',
    emailLabel: 'Send direct email',
    footer: '© 2026 Kushtrim Ramadani • Designed with precision in Vienna',
  },
  notFound: {
    title: 'Page not found',
    backHome: 'Back to home',
  },
}

export type Messages = typeof en

export default en
