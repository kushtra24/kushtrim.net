import clinicImage from '@/assets/img/project-clinic.jpg'
import pilatesImage from '@/assets/img/project-pilates.jpg'
import warehouseImage from '@/assets/img/project-warehouse.jpg'
import type { Messages } from '@/i18n/locales/en'

// Language-independent project data. All texts live in src/i18n/locales/, keyed by slug.
export type ProjectSlug = keyof Messages['projects']

export type ProjectPreviewData
  = | { kind: 'agent', timer: string }
    | { kind: 'json', fileName: string, code: string }
    | { kind: 'image', src: string, altKey: keyof Messages['preview']['imageAlt'] }
    | { kind: 'phones' }

export interface Project {
  slug: ProjectSlug
  preview: ProjectPreviewData
  /** Where to get the app or its code: shown as a button on the project page. */
  link?: { kind: 'google-play' | 'github', url: string }
}

export const projects: Project[] = [
  {
    slug: 'lab-clinic-management-app',
    preview: { kind: 'image', src: clinicImage, altKey: 'clinic' },
    link: { kind: 'github', url: 'https://github.com/kushtra24/medDirect' },
  },
  {
    slug: 'pilates-cue',
    preview: { kind: 'image', src: pilatesImage, altKey: 'pilates' },
    link: { kind: 'google-play', url: 'https://play.google.com/store/apps/details?id=com.pilates.cue' },
  },
  {
    slug: 'warehouse-management-app',
    preview: { kind: 'image', src: warehouseImage, altKey: 'warehouse' },
    link: { kind: 'github', url: 'https://github.com/kushtra24/smartLager' },
  },
]
