import type { ProjectDetails } from '@/i18n/projectDetails'

const clinicLab: ProjectDetails = {
  overview: 'Med Direct ist eine mandantenfähige Gesundheitsplattform, die Patient:innen mit Kliniken, Laboren und Polikliniken verbindet und mit Blick auf den irakischen Markt entwickelt wurde. Im öffentlichen Bereich lassen sich medizinische Einrichtungen auf einer Karte finden und Untersuchungsergebnisse abrufen. Dahinter erhält jede Organisation einen eigenen Arbeitsbereich für Patientenakten, Aufträge am Empfang, Labor- und Untersuchungsberichte sowie die Berechtigungen der Mitarbeitenden. Es handelt sich um eine Full-Stack-Anwendung mit einer Laravel-REST-API und einem serverseitig gerenderten Nuxt-Frontend, verfügbar auf Englisch, Arabisch und Kurdisch mit vollständiger Rechts-nach-links-Unterstützung und für das Deployment mit Docker paketiert.',
  whatItDoes: {
    intro: 'Die Plattform richtet sich an drei Zielgruppen: die Öffentlichkeit auf der Suche nach medizinischer Versorgung, Patient:innen, die ihre Ergebnisse abrufen möchten, und medizinisches Personal, das den Alltag einer Klinik oder eines Labors organisiert.',
    groups: [
      {
        title: 'Entwickelt für',
        items: [
          { name: 'Patient:innen und Gäste', text: '' },
          { name: 'Kliniken, Labore und Polikliniken', text: '' },
          { name: 'Empfangspersonal, Laborant:innen und Ärzt:innen', text: '' },
          { name: 'Inhaber:innen von Organisationen', text: '' },
        ],
      },
      {
        title: 'Öffentliches Verzeichnis',
        items: [
          { name: 'Suche nach Einrichtungen', text: 'Stichwortsuche, nach Relevanz sortiert, über Namen, Beschreibungen, Fachrichtungen und Leistungen, mit Filter nach Stadt oder Stadtteil.' },
          { name: 'Interaktive Karte', text: 'Suchergebnisse auf einer Leaflet-Karte mit gruppierten Markierungen und Pop-ups für jede Einrichtung.' },
          { name: 'Profile der Einrichtungen', text: 'Öffentliche Seiten mit Leistungen, Öffnungszeiten, Team, Galerie, gesprochenen Sprachen, Diplomen und Kontaktdaten.' },
        ],
      },
      {
        title: 'Zugang für Patient:innen',
        items: [
          { name: 'Ergebnisabruf als Gast', text: 'Patient:innen können abgeschlossene Labor- und Untersuchungsberichte ohne Konto abrufen, mit ihrem Namen und einer von der Klinik ausgegebenen 6-stelligen Zugangs-PIN.' },
          { name: 'Patientenkonten', text: 'Registrierte Patient:innen verwalten ihr Profil und sehen die abgeschlossenen Laborberichte, die mit ihrem Konto verknüpft sind.' },
          { name: 'Übernahme von Akten', text: 'Bestehende Klinikakten lassen sich bei der Registrierung per Identitätsabgleich mit einem Patientenkonto verknüpfen oder später durch erneute Prüfung von Name und PIN übernehmen.' },
          { name: 'Druckbare Berichte', text: 'Labor- und Untersuchungsergebnisse öffnen sich in eigenen Drucklayouts und können gedruckt oder als PDF gespeichert werden.' },
        ],
      },
      {
        title: 'Arbeitsbereich der Klinik',
        items: [
          { name: 'Patientenverwaltung', text: 'Patient:innen registrieren, suchen, bearbeiten und per Soft Delete löschen, wobei ihr Berichtsverlauf auch nach dem Löschen erhalten bleibt.' },
          { name: 'CSV-Import', text: 'Massenimport von bis zu 500 Patient:innen pro Datei, mit flexibler Zuordnung der Spaltennamen und Fehlermeldungen pro Zeile.' },
          { name: 'Krankengeschichte', text: 'Strukturierte Einträge zu Allergien, Beschwerden, Medikamenten, Impfungen und Vitalwerten für alle Patient:innen.' },
          { name: 'Auftragswarteschlange', text: 'Der Empfang erfasst den Grund des Besuchs und leitet die Arbeit an eine bestimmte Ärztin, einen bestimmten Arzt oder einen nicht zugewiesenen Pool weiter. Mitarbeitende können nach eigenen Aufträgen, nicht zugewiesenen Aufträgen oder Status filtern.' },
          { name: 'Labor- und Untersuchungsergebnisse', text: 'Mitarbeitende erfassen Ergebnisse einzeln mit Werten, Status und Referenzpunkten. Nur abgeschlossene Berichte erreichen die Patient:innen, und das Ablegen eines Laborberichts zum zugehörigen Auftrag schließt diesen ab.' },
          { name: 'Hinweise bei Profiländerungen', text: 'Ändern Patient:innen wichtige Angaben, erhält jede verknüpfte Klinik, deren Akte nun abweicht, einen Hinweis mit alten und neuen Werten zur Prüfung.' },
          { name: 'Dashboard', text: 'Tägliche Untersuchungen, neue Patient:innen des laufenden Monats und aktuelle Aktivitäten der Mitarbeitenden auf einen Blick.' },
        ],
      },
      {
        title: 'Verwaltung der Organisation',
        items: [
          { name: 'Mitarbeitende und Berechtigungen', text: 'Inhaber:innen fügen Mitarbeitende und Titel hinzu, während neun einzelne Berechtigungen steuern, was jede Person tun darf. Sensible Berechtigungen sind standardmäßig deaktiviert.' },
          { name: 'Editor für das öffentliche Profil', text: 'Rich-Text-Beschreibung, Bilder, Teammitglieder, Leistungen, Öffnungszeiten und Kartenkoordinaten, mit einem Wert für die Vollständigkeit des Profils.' },
        ],
      },
    ],
  },
  architecture: {
    intro: 'Med Direct trennt Frontend und Backend in zwei Anwendungen, die ausschließlich über eine versionierbare JSON-API miteinander kommunizieren, sodass sich beide unabhängig voneinander entwickeln und ausliefern lassen.',
    diagram: {
      title: 'Systemübersicht von Med Direct',
      systems: [
        { name: 'Nuxt-4-Frontend', text: 'Serverseitig gerenderte Vue-3-Anwendung mit öffentlichen Seiten, Patientenbereich, Kontrollzentrum für Kliniken, Drucklayouts und drei Sprachen.' },
        { name: 'Laravel-13-API', text: 'REST-API mit Token-Authentifizierung, mehrstufiger Autorisierung, Validierung, Business-Services und JSON-Ressourcen.' },
      ],
      channel: 'REST / JSON mit Laravel-Sanctum-Bearer-Tokens',
      flows: [
        { label: 'Suchanfragen, Anmeldungen, Patientenakten, Aufträge und Ergebnisse', direction: 'one-way' },
        { label: 'JSON-Ressourcen, Tokens, wirksame Berechtigungen und Validierungsfehler', direction: 'reverse' },
      ],
      shared: { name: 'MySQL 8', text: 'Eine einzige Datenbank für alle Organisationen, in der Mandantendaten über die Organisations-ID getrennt sind und die API diese Trennung durchsetzt.' },
    },
    outro: 'Im Produktivbetrieb führt Docker Compose fünf Dienste aus. Caddy terminiert HTTPS und leitet Anfragen an /api, /sanctum und /up an Nginx und PHP-FPM weiter, alles andere an den Nuxt-Node-Server. In der Entwicklung leitet der Vite-Proxy API-Aufrufe an Laravel weiter, wodurch keine CORS-Konfiguration nötig ist.',
  },
  highlights: {
    intro: 'Das Spannendste an diesem Projekt ist die Modellierung der tatsächlichen Abläufe in medizinischen Organisationen und bei Patient:innen.',
    items: [
      { name: 'Mehrstufige Autorisierung', text: 'Route-Middleware prüft zuerst die Mitgliedschaft in der Organisation und dann eine bestimmte Berechtigung, wobei Inhaber:innen implizit alle Berechtigungen besitzen. Neue Mitarbeitende starten nur mit Empfangsberechtigungen, sodass der Zugriff auf Patientendaten bewusst erteilt werden muss.' },
      { name: 'Mandantentrennung', text: 'Alle Patientenakten, Aufträge und Berichte sind ihrer Organisation zugeordnet, und eine Anfrage nach dem Datensatz einer anderen Organisation liefert „nicht gefunden“. Kliniken führen eigene, unabhängige Kopien der Patientendaten, statt sie zu teilen.' },
      { name: 'Identitätsabgleich in zwei Strengegraden', text: 'Die Selbstübernahme gleicht E-Mail-Adresse oder Name und Geburtsdatum ab. Die automatische Verknüpfung bei der Dateneingabe in der Klinik verlangt eine exakte Übereinstimmung von nationaler ID, vollständigem Namen und Geburtsdatum, damit das Personal eine Akte nicht wegen eines häufigen Namens der falschen Person zuordnet.' },
      { name: 'Sichere Übernahme von Akten', text: 'Bei der Übernahme einer gefundenen Akte werden Name und PIN erneut geprüft, statt einer übermittelten Patienten-ID zu vertrauen. Von einem anderen Konto übernommene Akten werden mit einem Konflikt abgelehnt, und eine wiederholte eigene Übernahme ändert nichts.' },
      { name: 'Änderungserkennung über Kliniken hinweg', text: 'Ein eigener Service vergleicht das aktualisierte Profil mit der Akte jeder verknüpften Klinik und erzeugt nur dann einen Hinweis, wenn sich Werte tatsächlich unterscheiden. Groß- und Kleinschreibung sowie Leerzeichen werden dabei ignoriert.' },
      { name: 'Bereinigter Rich Text', text: 'Beschreibungen von Kliniken werden serverseitig anhand einer strengen Tag-Allowlist neu aufgebaut und alle Attribute entfernt, sodass das gespeicherte HTML auf öffentlichen Seiten dargestellt werden kann.' },
      { name: 'Verschlüsselte Zugangs-PINs', text: 'Zugangs-PINs werden zufällig erzeugt, verschlüsselt gespeichert und in konstanter Zeit verglichen.' },
      { name: 'Echte Mehrsprachigkeit', text: 'Rund 1.100 übersetzte Texte pro Sprache, wobei die Seitenrichtung bei Arabisch und Kurdisch automatisch wechselt.' },
      { name: 'Automatisierte Feature-Tests', text: 'Eine Feature-Test-Suite deckt Berechtigungen, Mandantengrenzen, die Übernahme von Akten, den CSV-Import, das Suchranking und den Auftragsablauf ab.' },
    ],
  },
  techStack: {
    intro: 'Der Stack setzt auf aktuelle Versionen verbreiteter, gut gepflegter Frameworks und kommt darüber hinaus mit wenigen Abhängigkeiten aus.',
    rows: [
      { area: 'Frontend', technology: 'Nuxt 4, Vue 3 (Composition API), JavaScript', usedFor: 'Serverseitig gerenderte Seiten, Routing, Route Guards und gemeinsamer Zustand über Composables' },
      { area: 'Styling', technology: 'Tailwind CSS', usedFor: 'Responsive Mobile-First-Oberfläche und ein eigenes Designsystem' },
      { area: 'Internationalisierung', technology: '@nuxtjs/i18n', usedFor: 'Englisch, Arabisch und Kurdisch mit Rechts-nach-links-Layouts' },
      { area: 'Karten', technology: 'Leaflet, Leaflet.markercluster', usedFor: 'Interaktive Karte der Einrichtungen mit gruppierten Markierungen' },
      { area: 'Rich Text', technology: 'Tiptap', usedFor: 'Editor für die Beschreibung der Kliniken' },
      { area: 'Icons', technology: 'Font Awesome', usedFor: 'Icons der Oberfläche' },
      { area: 'Backend', technology: 'Laravel 13, PHP 8.4', usedFor: 'REST-API, Validierung, Geschäftslogik und Eloquent-Datenmodelle' },
      { area: 'Authentifizierung', technology: 'Laravel Sanctum', usedFor: 'Authentifizierung per API-Token' },
      { area: 'Datenbank', technology: 'MySQL 8', usedFor: 'Relationaler Speicher für alle Mandanten' },
      { area: 'Tests', technology: 'PHPUnit 12', usedFor: 'Feature-Tests der API' },
      { area: 'Container', technology: 'Docker, Docker Compose', usedFor: 'Reproduzierbare Entwicklungs- und Produktionsumgebungen, einschließlich eines mehrstufigen Frontend-Builds' },
      { area: 'Webserver', technology: 'Caddy 2, Nginx, PHP-FPM, Node.js 22', usedFor: 'HTTPS-Reverse-Proxy, Komprimierung und Auslieferung der Anwendung' },
    ],
  },
  scope: {
    intro: 'Diese Zahlen wurden direkt aus dem Quellcode und der Git-Historie des Projekts ermittelt.',
    rows: [
      { measure: 'API-Endpunkte', value: '59' },
      { measure: 'API-Controller', value: '19' },
      { measure: 'Datenmodelle', value: '20' },
      { measure: 'Datenbankmigrationen', value: '27' },
      { measure: 'Frontend-Seiten', value: '24' },
      { measure: 'Vue-Komponenten', value: '25' },
      { measure: 'Feature-Tests', value: '46' },
      { measure: 'Berechtigungen', value: '9' },
      { measure: 'Sprachen', value: '3 (Englisch, Arabisch, Kurdisch)' },
      { measure: 'Übersetzte Texte', value: 'Rund 1.100 pro Sprache' },
      { measure: 'Codezeilen', value: 'Rund 20.500 (Frontend 12.500, Backend 6.500, Tests 1.500)' },
      { measure: 'Entwicklungszeitraum', value: 'April bis September 2026' },
      { measure: 'Commits', value: '38' },
    ],
  },
}

export default clinicLab
