// Content of a project page. Add one file per language in src/i18n/locales/projects/
// and register both under `projectDetails` in en.ts and de.ts.

export interface NamedText {
  name: string
  text: string
}

export interface ArchitectureDiagramData {
  title: string
  /** The two sides of the diagram. */
  systems: [NamedText, NamedText]
  /** What connects the two sides. */
  channel: string
  /** `one-way` points from the first system to the second, `reverse` from the second to the first. */
  flows: { label: string, direction: 'one-way' | 'reverse' | 'two-way' }[]
  /** What both sides are built on. */
  shared: NamedText
}

export interface ProjectDetails {
  /** Replaces the short card description at the top of the project page. */
  overview: string
  whatItDoes: {
    intro: string
    groups: { title: string, items: NamedText[] }[]
  }
  architecture: {
    intro: string
    diagram: ArchitectureDiagramData
    outro: string
  }
  highlights: {
    intro: string
    items: NamedText[]
  }
  techStack: {
    intro: string
    rows: { area: string, technology: string, usedFor: string }[]
  }
  scope: {
    intro: string
    rows: { measure: string, value: string }[]
  }
}
