import type { ProjectDetails } from '@/i18n/projectDetails'

const smartLager: ProjectDetails = {
  overview: 'SmartLager ist eine Webanwendung zur Lagerverwaltung für kleine und mittlere Schweizer Unternehmen. Mitarbeitende verwalten Produkte, Lieferanten, Kund:innen, Lieferungen und Rechnungen in einem einzigen Admin-Dashboard. Wird eine Lieferung erfasst, entsteht daraus automatisch eine Rechnung mit Schweizer QR-Rechnung als Zahlteil. Das Frontend ist mit Nuxt 4, Vue 3 und TypeScript gebaut. Es kommuniziert mit einer per Sanctum abgesicherten Laravel-REST-API, und die Oberfläche ist auf Deutsch, Englisch und Französisch verfügbar.',

  whatItDoes: {
    intro: 'Die App deckt den zentralen Ablauf im Lager ab: Zuerst erfassen Sie, was Sie an Lager haben und woher es kommt, dann, an wen Sie verkaufen, und schließlich versenden Sie die Ware und stellen sie in Rechnung.',
    groups: [
      {
        title: 'Bestand & Geschäftspartner',
        items: [
          { name: 'Produktkatalog', text: 'Produkte mit Typ, Kategorie, Preis, Größe, Barcode, Einheit, Anfangsbestand, Mindestbestand, Lagerort und Ablaufdatum erfassen. Jedes Produkt ist mit einem Lieferanten verknüpft.' },
          { name: 'Lieferantenverwaltung', text: 'Lieferanten anlegen, ansehen und mit den Produkten verknüpfen, die sie liefern.' },
          { name: 'Kundenverwaltung', text: 'Getrennte Kundentypen für Firmen und Privatpersonen, mit UID/MWST-Nummer, IBAN, Kontaktdaten, Rechnungsadresse und Notizen. Jede Kundenseite zeigt die vollständige Rechnungshistorie dieser Kundin oder dieses Kunden.' },
          { name: 'Dashboard', text: 'Übersichtskarten mit aktuellen Zahlen zu Benutzer:innen, Lieferungen, Rechnungen, Lieferanten, Kund:innen und Produkten. Jede Karte führt zum jeweiligen Bereich.' },
        ],
      },
      {
        title: 'Lieferungen, Rechnungen & Verwaltung',
        items: [
          { name: 'Lieferungs-Editor', text: 'Produkte aus einer durchsuchbaren Liste auswählen, Menge und Stückpreis pro Position festlegen und Positions- sowie Gesamtsummen live mitverfolgen. Kund:innen werden per Suche während der Eingabe gefunden und in einer Rechnungsvorschau angezeigt.' },
          { name: 'Automatische Rechnungsstellung', text: 'Jede Lieferung erzeugt eine Rechnung mit automatisch vergebener Nummer (JJJJ-MM-XXXXX), Rechnungs- und Fälligkeitsdatum, Schweizer Mehrwertsteuer (standardmäßig 8,1 %), Zwischensumme, Steuer und Gesamtbetrag. Der Rechnungsstatus durchläuft Ausstehend, In Lieferung, Versendet und Zugestellt.' },
          { name: 'Schweizer QR-Rechnung', text: 'Rechnungsseiten zeigen einen Zahlteil nach Schweizer QR-Rechnungs-Standard, erstellt aus der IBAN des Unternehmens und der Rechnungsadresse der Kundin oder des Kunden. Ein druckoptimiertes Layout liefert eine versandfertige Papierrechnung.' },
          { name: 'Benutzer- & Zugriffsverwaltung', text: 'Admins laden Benutzer:innen mit Name und E-Mail ein. Eingeladene setzen ihr Passwort selbst über einen Link mit Token, und Routen sind für angemeldete Benutzer:innen und für Admins geschützt.' },
        ],
      },
    ],
  },

  architecture: {
    intro: 'SmartLager ist eine Single-Page-App mit Nuxt, die mit einer separaten Laravel-API kommuniziert. Alle Geschäftsdaten und -regeln liegen in der API. Das Frontend steuert den Ablauf, berechnet die Summen und erstellt den Zahlteil der QR-Rechnung im Browser.',
    diagram: {
      title: 'SmartLager Systemübersicht',
      systems: [
        { name: 'Nuxt-4-Frontend', text: 'Vue-3- und TypeScript-App, nach Fachbereichen gegliedert (Kund:innen, Produkte, Lieferanten, Lieferungen, Rechnungen, Benutzer:innen). Nutzt PrimeVue-Komponenten, Tailwind-Styling, Pinia-State und i18n-Routing auf DE/EN/FR.' },
        { name: 'Laravel-REST-API', text: 'Zuständig für Authentifizierung (Sanctum), Einladungen und Passwortvergabe, CRUD für alle Ressourcen, paginierte und sortierbare Listen, Dashboard-Statistiken sowie das Speichern von Lieferungen zusammen mit ihren Rechnungen.' },
      ],
      channel: 'HTTPS-JSON über Axios: Sanctum-CSRF-Cookie plus Bearer-Token',
      flows: [
        { label: 'Login, CSRF-Handshake und Token-Austausch', direction: 'one-way' },
        { label: 'Paginierte und sortierte Listen (page, per_page, sort_field, sort_order)', direction: 'one-way' },
        { label: 'Lieferungsdaten: Kund:in, Produktpositionen und Rechnungssummen', direction: 'one-way' },
        { label: 'Rechnung mit IBAN des Unternehmens und Rechnungsadresse der Kund:in für die QR-Rechnung', direction: 'two-way' },
        { label: 'Dashboard-Zahlen und Detailansichten der Ressourcen', direction: 'two-way' },
      ],
      shared: { name: 'Gemeinsamer Axios-Client', text: 'Eine einzige Axios-Instanz hängt an jede Anfrage das Auth-Token an und beendet die Sitzung, wenn die API 401 zurückgibt. So nutzen alle Bereiche dieselbe Authentifizierung und Fehlerbehandlung.' },
    },
    outro: 'Weil das Frontend ein reiner API-Client ist, lässt sich das Laravel-Backend unabhängig davon skalieren, wiederverwenden oder ersetzen. Die Nuxt-App konzentriert sich auf die Benutzererfahrung: Routen mit Sprachpräfix, Routen-Guards und ein Lieferungsentwurf, der ein Neuladen der Seite übersteht.',
  },

  highlights: {
    intro: 'Umsetzungsdetails, die über einfache CRUD-Masken hinausgehen:',
    items: [
      { name: 'Erstellung der Schweizer QR-Rechnung', text: 'Nutzt die Bibliothek swissqrbill, um im Browser einen normkonformen Zahlteil als SVG zu erzeugen. Vorher wird geprüft, ob die IBAN des Zahlungsempfängers vorhanden ist, und statt einer fehlerhaften Rechnung erscheint eine verständliche Fehlermeldung.' },
      { name: 'Wiederverwendbare, serverseitige Datentabelle', text: 'Eine einzige BaseDatatable-Komponente, konfiguriert mit Ressourcenname und Spalten, gibt jeder Listenseite serverseitige Paginierung, Sortierung und Klick zur Detailansicht.' },
      { name: 'Dauerhafte Lieferungsentwürfe', text: 'Der Pinia-Store für Lieferungen speichert ausgewählte Produkte, Mengen, Kund:in und Rechnungsdaten über useStorage von VueUse im localStorage, sodass eine halb fertige Lieferung ein Neuladen übersteht.' },
      { name: 'Auth-Ablauf mit Laravel Sanctum', text: 'Ein eigenes useAuth-Composable übernimmt den CSRF-Cookie-Handshake, meldet per Token an, stellt die Sitzung beim Start über ein Plugin wieder her und schützt Routen mit den Flags requiresAuth, requiresAdmin und guestOnly.' },
      { name: 'Von Haus aus dreisprachig', text: 'Vollständige Übersetzungen auf Deutsch, Englisch und Französisch (je über 300 Schlüssel), mit Routen mit Sprachpräfix und Datumsformaten, die sich nach der gewählten Sprache richten.' },
      { name: 'Druckfertige Rechnungen', text: 'Tailwind-print:-Varianten blenden die App-Oberfläche und Schatten aus, sodass der Druckdialog des Browsers eine saubere Rechnung mit QR-Zahlteil erzeugt.' },
    ],
  },

  techStack: {
    intro: 'Ein moderner Vue-Stack mit bewusst wenigen Abhängigkeiten:',
    rows: [
      { area: 'Framework', technology: 'Nuxt 4, Vue 3.5', usedFor: 'Routing, Layouts, Middleware, Plugins und Auto-Imports' },
      { area: 'Sprache', technology: 'TypeScript (strict)', usedFor: 'Typisierte Stores, Composables und Komponenten' },
      { area: 'UI-Komponenten', technology: 'PrimeVue 4 (Aura-Theme)', usedFor: 'Datentabellen, Formulare, Autovervollständigung, Datumsauswahl, Toasts, Karten' },
      { area: 'Styling', technology: 'Tailwind CSS 4, tailwindcss-primeui', usedFor: 'Responsives Layout und Druckstile' },
      { area: 'State', technology: 'Pinia, VueUse', usedFor: 'Zustand des Lieferungsablaufs, im localStorage gespeichert' },
      { area: 'HTTP', technology: 'Axios', usedFor: 'Gemeinsamer API-Client mit Auth- und 401-Interceptoren' },
      { area: 'Authentifizierung', technology: 'Laravel Sanctum', usedFor: 'CSRF-geschützter Login, Bearer-Token, Passwortvergabe per Einladung' },
      { area: 'Zahlungen', technology: 'swissqrbill', usedFor: 'Zahlteile nach Schweizer QR-Rechnungs-Standard auf Rechnungen' },
      { area: 'i18n', technology: '@nuxtjs/i18n', usedFor: 'Deutsch (Standard), Englisch, Französisch mit Sprachpräfix in Routen' },
      { area: 'Icons & Assets', technology: 'Font Awesome, @nuxt/fonts, @nuxt/image', usedFor: 'Navigations-Icons, Schrift- und Bildoptimierung' },
      { area: 'Tooling', technology: 'ESLint 9 (@nuxt/eslint), vue-tsc', usedFor: 'Linting und Typprüfung' },
      { area: 'Backend', technology: 'Laravel-REST-API (separates Repository)', usedFor: 'Persistenz, Geschäftsregeln, Dashboard-Statistiken' },
    ],
  },

  scope: {
    intro: 'Umfang der Frontend-Codebasis:',
    rows: [
      { measure: 'Fachbereiche', value: '6 (Produkte, Lieferanten, Kund:innen, Lieferungen, Rechnungen, Benutzer:innen)' },
      { measure: 'Seiten / Routen', value: '21' },
      { measure: 'Vue-Fach- und Basiskomponenten', value: '16' },
      { measure: 'Genutzte API-Endpunkte', value: '~15' },
      { measure: 'Unterstützte Sprachen', value: '3 (DE, EN, FR)' },
      { measure: 'Quellcodezeilen (Vue/TS/JSON)', value: '~6.400' },
      { measure: 'Versionierte Dateien', value: '74' },
    ],
  },
}

export default smartLager
