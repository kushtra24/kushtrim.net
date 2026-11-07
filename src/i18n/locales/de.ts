import type { Messages } from '@/i18n/locales/en'
import pilatesCue from '@/i18n/locales/projects/pilates-cue.de'
import clinicLab from '@/i18n/locales/projects/clinic-lab.de'
import smartLager from '@/i18n/locales/projects/smart-lager.de'

const de: Messages = {
  meta: {
    title: 'Kushtrim Ramadani',
    description: 'Kushtrim Ramadani — Senior Frontend & Emerging Tech Lead. Barrierefreie, skalierbare Frontends und agentische KI-Tools.',
  },
  controls: {
    switchLanguage: 'Sprache auf Englisch umstellen',
    toggleTheme: 'Farbmodus wechseln',
  },
  common: {
    downloadCv: 'Lebenslauf herunterladen',
    getInTouch: 'Kontakt aufnehmen',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    location: 'Wien, Österreich',
    tagline: 'Ich baue gerne Dinge, das macht mich glücklich. Dies ist eine Vorstellung davon, was ich tue und wer ich bin.',
  },
  hero: {
    title: 'Softwareentwickler',
    portraitAlt: 'Kushtrim Ramadani - Senior Frontend & Tech Lead',
  },
  marquee: ['Vue.js 3', 'TypeScript', 'Barrierefreiheit', 'Agentische KI', 'LangGraph', 'Designsysteme', 'Laravel', 'Android', 'Scrum'],
  featuredProjects: {
    title: 'Ausgewählte Projekte',
    description: 'Von Multi-Agenten-KI-Systemen über Web-Apps für Unternehmen bis zu nativen Mobile-Apps, entwickelt mit Fokus auf Benutzerfreundlichkeit, Barrierefreiheit und saubere Architektur.',
    viewProject: 'Mehr ansehen',
    googlePlay: 'Jetzt bei Google Play',
  },
  projects: {
    'ai-interview-assistant': {
      title: 'KI-Interview-Assistent',
      tags: ['Agentische KI', 'LLM', 'Career Tech'],
      description: 'Agentischer KI-Assistent für Vorstellungsgespräche, der Sie vorab trainiert, Ihnen hilft, beim Beantworten von Fragen in Echtzeit fokussiert zu bleiben, und im Anschluss strukturiertes Feedback gibt.',
    },
    'multi-agent-pdf-job-ad-parser': {
      title: 'Multi-Agenten-Parser für PDF-Stellenanzeigen',
      tags: ['Multi-Agent', 'LangGraph', 'Datenextraktion'],
      description: 'Spezialisiertes Multi-Agenten-System auf Basis von LangGraph, das PDF-Stellenanzeigen im Rohformat einliest und strukturierte JSON-Schemas extrahiert, mit Human-in-the-Loop-Prüfung.',
    },
    'warehouse-management-app': {
      title: 'Lagerverwaltungs-App',
      tags: ['Web-App', 'Rechnungsstellung', 'KMU'],
      description: 'Webanwendung zur Lagerverwaltung für kleine Schweizer Unternehmen, die Produkte, Lieferanten und Kund:innen verwaltet und aus jeder Lieferung eine Rechnung mit Schweizer QR-Rechnung erstellt.',
    },
    'lab-clinic-management-app': {
      title: 'Labor- und Praxisverwaltungs-App',
      tags: ['Web-App', 'Gesundheitswesen', 'Mandantenfähig'],
      description: 'Mandantenfähige Gesundheitsplattform, die Patient:innen mit Kliniken und Laboren verbindet, mit Patientenakten, Aufträgen am Empfang sowie Labor- und Untersuchungsberichten.',
    },
    'pilates-cue': {
      title: 'Pilates Cue',
      tags: ['Android', 'Wear OS', 'Fitness'],
      description: 'App für Android und Wear OS, mit der sich Pilates-Kurse erstellen, mit einem geführten Timer durchführen und die Woche planen lässt.',
    },
    'zenith-tasks-android': {
      title: 'Zenith Tasks Android',
      tags: ['Android', 'Nativ', 'Mobile'],
      description: 'Native Android-App, durchgängig mit Jetpack Compose und Kotlin entwickelt und im Google Play Store veröffentlicht.',
    },
  },
  projectDetails: {
    'pilates-cue': pilatesCue,
    'lab-clinic-management-app': clinicLab,
    'warehouse-management-app': smartLager,
  },
  preview: {
    agentStatus: 'Agent analysiert',
    suggestionLabel: 'Vorschlag in Echtzeit',
    suggestion: '„Heben Sie Ihre Erfahrung bei der Koordination modularer Frontend-Refactorings über verteilte, funktionsübergreifende Teams hervor.“',
    validated: '✓ validiert',
    imageAlt: {
      warehouse: 'Logistik-Dashboard mit Lagerplatzbeständen in Echtzeit und Status der Barcode-Scanner',
      clinic: 'Dashboard für Patientenakten mit synchronisierten Kalendern und Laborwerten',
      pilates: 'Drei Bildschirme von Pilates Cue: Kursliste, geführter Timer und Formular für neue Kurse',
    },
    phoneScreens: ['Heute', 'Sprint', 'Einstellungen'],
  },
  project: {
    allProjects: 'Alle Projekte',
    viewOnGithub: 'Auf GitHub ansehen',
    whatItDoes: 'Was die App kann',
    architecture: 'Architektur',
    highlights: 'Technische Highlights',
    techStack: 'Tech-Stack',
    scope: 'Projektumfang',
    area: 'Bereich',
    technology: 'Technologie',
    usedFor: 'Verwendet für',
    measure: 'Kennzahl',
    value: 'Wert',
  },
  journey: {
    title: 'Mein Werdegang',
    description: 'Von der Fullstack-Entwicklung zur Frontend-Leitung und zu agentischer KI.',
    showMore: 'Mehr anzeigen',
    showLess: 'Weniger anzeigen',
    experience: [
      {
        title: 'Unicornis (Norwegen)',
        badge: 'Auftragsbasis',
        subtitle: 'Lead Frontend Developer • 2026',
        description: 'Modulare Micro-Frontend-Architektur für eine große Event-Webanwendung federführend aufgebaut.',
      },
      {
        title: 'karriere.at',
        badge: 'Vollzeit',
        subtitle: 'Web Engineer (Frontend) • 08/2024 – 08/2026',
        description: 'Vue.js-Frontends und Laravel-Backends entwickelt und ein Multi-Agenten-System mit LangGraph gebaut, das Stellenanzeigen analysiert und Ergebnisse von Menschen prüfen lässt.',
      },
      {
        title: 'ISHAP',
        badge: 'Vollzeit',
        subtitle: 'Fullstack Developer • 01/2021 – 08/2024',
        description: 'Ein digitales Bauwerksbuch für die österreichische Baubranche mit PHP und JavaScript entwickelt.',
      },
      {
        title: 'AVL',
        badge: 'Vollzeit',
        subtitle: 'Fullstack Developer • 01/2018 – 08/2021',
        description: 'Einen Proof of Concept für einen großen deutschen Automobilhersteller sowie ein Vertragsmanagementsystem mit Laravel und Angular entwickelt und die Frontend-Komponentenbibliothek erweitert.',
      },
      {
        title: 'BEO',
        badge: 'Vollzeit',
        subtitle: 'Fullstack Developer • 01/2016 – 08/2018',
        description: 'Ein Klinikverwaltungssystem für Nichtregierungsorganisationen, die Kinder mit Lippen-Kiefer-Gaumenspalte unterstützen, mit Laravel, jQuery und Vue.js weiterentwickelt und gewartet.',
      },
    ],
    education: [
      {
        title: 'UB Graz',
        badge: 'Ausbildung',
        subtitle: 'Digitalisierungsmanagement',
        note: 'Laufendes Studium',
      },
      {
        title: 'Scrum.org',
        badge: 'Zertifizierung',
        subtitle: 'Professional Scrum Master I (PSM I)',
        note: 'Zertifikat erworben 2023',
      },
      {
        title: 'Gehirngerecht.digital',
        badge: 'Weiterbildung',
        subtitle: 'Workshop zu digitaler Barrierefreiheit',
        note: 'Abgeschlossen 02/2026',
      },
      {
        title: 'Bachelor in Informatik',
        badge: 'Ausbildung',
        subtitle: 'Bachelorstudium der Informatik mit Schwerpunkt Softwareentwicklung',
        note: 'Abgeschlossen 2015',
      },
    ],
  },
  profile: {
    eyebrow: 'Profil',
    title: 'Ich bin Kushtrim Ramadani',
    description: 'Frontend Engineer, Vater, begeistert von UI/UX und Persönlichkeitspsychologie.',
    bio: [
      'Nach über einem Jahrzehnt Webentwicklung im Produktivbetrieb konzentriere ich mich auf die Schnittstelle zwischen stabiler Architektur und herausragender Nutzererfahrung. Meine Arbeit umfasst hochperformante Vue- und TypeScript-Codebasen, robuste PHP/Laravel-Plattformen und agentische KI-Systeme.',
      'Ich setze mich entschieden für inklusives Design ein und verankere die Konformität mit WCAG 2.1 AA/AAA in den Arbeitsabläufen der Entwicklung. Aktuell konzipiere ich autonome, agentische KI-Tools mit LangGraph, die die Produktivität von Unternehmen deutlich steigern, wobei die letzte Entscheidung beim Menschen bleibt.',
      'Mein Fokus liegt darauf, psychologische Sicherheit zu fördern, Engineers mit umsetzbaren Architektur-RFCs den Weg freizumachen und Menschen dabei zu begleiten, Code zu schreiben, auf den sie stolz sind.',
    ],
  },
  expertise: {
    title: 'Expertise & Fähigkeiten',
    description: 'Sorgfältiges Handwerk in Websystemen, Barrierefreiheitsstandards und moderner KI-Orchestrierung.',
    skills: [
      {
        number: '01',
        title: 'Frontend-Entwicklung',
        description: 'Vue.js 3 (Composition API, Pinia), TypeScript, Vite, komponentenbasierte Designsysteme, State-Architektur und Performance-Optimierung.',
      },
      {
        number: '02',
        title: 'Web-Barrierefreiheit',
        description: 'WCAG 2.1 AA/AAA-Konformität, WAI-ARIA Authoring Practices, Screenreader-Tests (NVDA, VoiceOver) und Tastaturbedienung.',
      },
      {
        number: '03',
        title: 'Agentische KI',
        description: 'LangGraph, Python, Multi-Agenten-Orchestrierung, LLM-Integrationen und robuste Human-in-the-Loop-Evaluierung.',
      },
      {
        number: '04',
        title: 'Backend & Mobile',
        description: 'PHP 8, Laravel, REST-APIs, GraphQL sowie native Android-Entwicklung mit Kotlin und Jetpack Compose.',
      },
      {
        number: '05',
        title: 'Führung & Agile',
        description: 'Scrum (PSM I zertifiziert), Tech-Lead-Prinzipien, Architektur-RFCs, Code-Mentoring, Sprint-Planung und funktionsübergreifende Abstimmung.',
      },
      {
        number: '06',
        title: 'Digitalisierungsmanagement',
        description: 'E-Strategie, Marketing und Vertrieb, betriebliche Informationssysteme, Datenbanken und Cloud-Technologien, Kommunikation und Führung, Personalwesen, Rechnungswesen und Finanzen, Informationssicherheit und Datenschutz, Qualitätsmanagement, Projektmanagement.',
      },
    ],
  },
  contact: {
    pageTitle: 'Kontakt',
    title: 'Lassen Sie uns zusammenarbeiten',
    description: 'Sie suchen eine Frontend-Leitung, der Codequalität, Barrierefreiheit und Menschen wichtig sind? Sprechen wir darüber.',
    directEmail: 'Direkte E-Mail',
    copyEmail: 'E-Mail kopieren',
    copyEmailLabel: 'E-Mail-Adresse kopieren',
    copied: 'Kopiert!',
    copiedToast: 'E-Mail in die Zwischenablage kopiert!',
    linkedinLabel: 'LinkedIn-Profil',
    githubLabel: 'GitHub-Profil',
    emailLabel: 'Direkt eine E-Mail senden',
    footer: '© 2026 Kushtrim Ramadani • Mit Präzision gestaltet in Wien',
  },
  notFound: {
    title: 'Seite nicht gefunden',
    backHome: 'Zur Startseite',
  },
}

export default de
