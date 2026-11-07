import type { ProjectDetails } from '@/i18n/projectDetails'

const pilatesCue: ProjectDetails = {
  overview: 'Pilates Cue ist eine App für Android und Wear OS, mit der sich Pilates-Kurse erstellen, mit einem geführten Timer durchführen und die Woche planen lässt. Ein laufender Kurs bleibt zwischen Smartphone und Uhr synchron, sodass er auf beiden Geräten pausiert, übersprungen oder beendet werden kann.',
  whatItDoes: {
    intro: 'Mit der App wird ein Pilates-Kurs einmal erstellt und danach freihändig über Smartphone oder Uhr durchgeführt. Alle Kursdaten bleiben auf dem Gerät, ohne Konto und ohne Backend.',
    groups: [
      {
        title: 'Auf dem Smartphone',
        items: [
          { name: 'Kurs-Builder', text: 'Übungen auswählen, die Zeit pro Übung festlegen, Pausen, Geräte-Tags, eine Schwierigkeitsstufe und Notizen hinzufügen. Der Builder warnt, wenn die Übungen die Kursdauer überschreiten, oder passt die Gesamtdauer automatisch an.' },
          { name: 'Übungsbibliothek', text: '31 integrierte Übungen mit Bildern, gruppiert nach Mat, Reformer und Cadillac. Eigene Übungen lassen sich mit Foto, Kategorie, Schwierigkeit, Tempo und Position ergänzen.' },
          { name: 'Geführter Timer', text: 'Ein Countdown mit Signaltönen, automatischen Pausen, Wischnavigation zwischen den Übungen und einem Bildschirm, der eingeschaltet bleibt. Vor dem Kursstart lassen sich Übungen per Drag-and-drop neu anordnen.' },
          { name: 'Wochenplaner', text: 'Kurse im Kalender einplanen und Notizen pro Tag hinzufügen. Vergangene Pläne werden nach 24 Stunden automatisch entfernt.' },
          { name: 'Startseite und Stöbern', text: 'Zuletzt gestartete und anstehende Kurse sowie Filter nach Schwierigkeit.' },
          { name: 'Erster Start', text: 'Eine überspringbare Einführungstour, die sich über das Profil erneut öffnen lässt, und eine Bewertungsanfrage nach jeweils drei Workouts.' },
        ],
      },
      {
        title: 'Auf der Uhr',
        items: [
          { name: 'Synchronisierte Kurse', text: 'Jeder auf dem Smartphone erstellte Kurs erscheint automatisch auf der Uhr.' },
          { name: 'Timer auf der Uhr', text: 'Der vollständige geführte Timer, zusätzlich zu den Signaltönen mit Vibration und mit Wischnavigation auf dem runden Display.' },
          { name: 'Steuerung in beide Richtungen', text: 'Ein auf dem Smartphone gestarteter Kurs öffnet sich auf der Uhr. Wird er auf einem Gerät pausiert, übersprungen oder beendet, folgt das andere.' },
          { name: 'Tile', text: 'Eine Kachel auf der Uhr zum Starten eines Kurses, die während eines Workouts zur aktuellen Übung wechselt.' },
          { name: 'Ongoing Activity', text: 'Ein laufender Kurs zeigt einen Live-Countdown auf dem Zifferblatt und in den zuletzt verwendeten Apps.' },
        ],
      },
    ],
  },
  architecture: {
    intro: 'Das Projekt besteht aus drei Gradle-Modulen: einer Smartphone-App, einer Uhren-App und einer gemeinsamen Bibliothek mit den Sync-Modellen und der Workout-Logik. Die Kursdaten liegen beim Smartphone, der Live-Status eines Workouts kann sich dagegen auf beiden Geräten ändern.',
    diagram: {
      title: 'Systemarchitektur: Smartphone-App, Uhren-App und die Daten, die sie austauschen',
      systems: [
        { name: 'Smartphone-App', text: 'Verwaltet die Kursdaten in ihrer Room-Datenbank' },
        { name: 'Uhren-App', text: 'Kursliste, geführter Timer, Tile und Ongoing Activity' },
      ],
      channel: 'Wearable Data Layer API',
      flows: [
        { label: 'Kurslisten', direction: 'one-way' },
        { label: 'Live-Workout-Status', direction: 'two-way' },
      ],
      shared: { name: 'Gemeinsame Bibliothek', text: 'Sync-Modelle und Workout-Logik' },
    },
    outro: 'Kurslisten fließen in eine Richtung, von der Datenbank des Smartphones zur Uhr. Der Workout-Status fließt in beide Richtungen, und jeder Bildschirm stellt einfach den neuesten Status des Controllers dar.',
  },
  highlights: {
    intro: 'Die größte Herausforderung war, einen Live-Countdown auf zwei Geräten korrekt zu halten, deren Verbindung jederzeit abreißen kann.',
    items: [
      { name: 'Ein Timer, der Sync-Verzögerungen übersteht', text: 'Jeden Tick zu synchronisieren wäre langsam und würde den Akku stark belasten. Der gemeinsame Status speichert die verbleibende Zeit zu einem Zeitstempel, sodass jedes Gerät den Live-Countdown anhand der eigenen Uhr berechnet.' },
      { name: 'Konfliktbehandlung ohne Server', text: 'Jedes Gerät schreibt ein eigenes Datenelement, und das neueste Update gewinnt. Ältere Updates werden ignoriert, auch solche, die nach einem Stopp eintreffen, sodass eine verspätete Nachricht keinen beendeten Kurs wiederbeleben kann.' },
      { name: 'Wiederherstellung nach abgebrochenen Workouts', text: 'Ein Kurs, der 3 Stunden lang unberührt bleibt, gilt als abgebrochen, sodass eine beendete App kein Phantom-Workout auf dem anderen Gerät hinterlässt.' },
      { name: 'Ein Statusmodell, zwei Oberflächen', text: 'Pausen, Überspringen, Übungswechsel und Pausenübergänge sind reine Funktionen auf einer unveränderlichen Statusklasse in einem gemeinsamen Modul. Die Bildschirme auf Smartphone und Uhr stellen diesen Status nur dar und senden Aktionen.' },
      { name: 'Sichere Datenentwicklung', text: 'Die Room-Datenbank hat über sieben handgeschriebene Migrationen die Schemaversion 8 erreicht. Sie erhalten die Nutzerdaten bei Änderungen wie der Umstellung von Minuten auf Sekunden oder dem Auslagern von Terminen in eine eigene Tabelle.' },
      { name: 'Reaktiver Datenfluss', text: 'Bildschirme beobachten Datenbankänderungen über Kotlin Flow, und derselbe Stream überträgt geänderte Kurse an die Uhr.' },
      { name: 'Eigene Interaktionskomponenten', text: 'Die Zahlenrad-Auswahl und die Liste zum Umsortieren per langem Drücken und Ziehen sind direkt auf den Gesten- und Layout-APIs von Compose aufgebaut.' },
      { name: 'Release-Setup für den Produktivbetrieb', text: 'Release-Builds nutzen R8 zur Verkleinerung von Code und Ressourcen. Smartphone- und Uhren-App werden unter einer gemeinsamen Application ID ausgeliefert, wie es Google Play für eine gekoppelte Wear-OS-App erwartet.' },
    ],
  },
  techStack: {
    intro: 'Das Projekt ist zu 100 % in Kotlin geschrieben, mit deklarativer Oberfläche auf beiden Geräten und aktuellen Android-Tools.',
    rows: [
      { area: 'Sprache', technology: 'Kotlin 2.3, Coroutines, Flow', usedFor: 'Gesamte App-Logik, asynchrone Abläufe und reaktive Daten' },
      { area: 'Smartphone-UI', technology: 'Jetpack Compose, Material 3', usedFor: 'Alle Smartphone-Bildschirme und die eigenen Komponenten' },
      { area: 'Uhren-UI', technology: 'Compose for Wear OS, Material 3', usedFor: 'Kursliste und Timer auf der Uhr' },
      { area: 'Oberflächen der Uhr', technology: 'Wear Tiles, ProtoLayout, Ongoing Activity', usedFor: 'Tile und die Live-Anzeige des Workouts' },
      { area: 'Gerätesynchronisierung', technology: 'Wearable Data Layer API', usedFor: 'Kurslisten und Live-Workout-Status' },
      { area: 'Serialisierung', technology: 'kotlinx.serialization', usedFor: 'JSON-Daten zwischen Smartphone und Uhr' },
      { area: 'Lokaler Speicher', technology: 'Room (SQLite), KSP', usedFor: '7 Tabellen mit Relationen, Fremdschlüsseln und Migrationen' },
      { area: 'Bilder', technology: 'Coil', usedFor: 'Übungsbilder, auch eigene Fotos' },
      { area: 'Analytics', technology: 'Firebase Analytics', usedFor: 'Bildschirmaufrufe, Workout-Starts und Entscheidungen bei Abfragen' },
      { area: 'Monetarisierung', technology: 'Google AdMob', usedFor: 'Banner-, Native- und App-Open-Anzeigen' },
      { area: 'Build', technology: 'Gradle Kotlin DSL, Android Gradle Plugin 9.5, R8', usedFor: 'Builds mit mehreren Modulen und Release-Optimierung' },
    ],
  },
  scope: {
    intro: 'Vom ersten Commit bis zum Release mit Wear-OS-Synchronisierung vergingen rund fünf Monate.',
    rows: [
      { measure: 'Entwicklungszeitraum', value: 'Mai 2026 bis November 2026' },
      { measure: 'Commits', value: '50' },
      { measure: 'Kotlin-Code', value: 'Rund 12.600 Zeilen in 76 Dateien' },
      { measure: 'Gradle-Module', value: '3 (Smartphone-App, Uhren-App, gemeinsame Bibliothek)' },
      { measure: 'Smartphone-Unterstützung', value: 'Android 7.0 und höher (API 24)' },
      { measure: 'Uhren-Unterstützung', value: 'Wear OS 3 und höher (API 30)' },
    ],
  },
}

export default pilatesCue
