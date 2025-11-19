/**
 * Icon Dictionary - Single Source of Truth per tutte le icone SVG
 * Centralizza tutte le icone utilizzate nell'applicazione
 */

export const ICONS = {
  // Logo / Brand
  logo: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 256 256" enable-background="new 0 0 256 256" xml:space="preserve">
    <path fill="currentColor" d="M106.3,69.9c1.5,0.4,4.7,1.6,7,2.6c5.6,2.5,9.3,3.2,15,3.2c5.5,0,8.9-0.7,14.5-3.3c2.2-1,5.2-2.1,6.8-2.6c3.6-0.9,11.3-0.9,14.8,0c9.3,2.5,17.2,11.1,18.8,20.7c1.3,7.7-0.9,31.9-4.7,51.1c-4.8,24.4-11.6,41.2-18.1,44.5c-1.5,0.8-4,0.9-5.7,0.3c-3.7-1.4-7.4-8.3-12.4-23c-4.7-13.9-7.3-18.7-11.2-20.6c-2.3-1.2-4.2-1.2-6.4,0c-3.9,2-6.3,6.4-11.2,20.6c-5.1,14.9-7.9,20.4-11.5,22.4c-2.1,1.1-4.6,1.3-6.5,0.3c-7.5-3.8-15.6-26.4-20.2-56.3c-2.5-16.2-3.6-33.4-2.6-39.3c1.7-9.6,9-17.9,18.4-20.6C94.8,69,102.6,68.9,106.3,69.9z"/>
  </svg>`,

  // Contact Icons
  phone: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>`,

  email: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>`,

  location: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>`,

  clock: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>`,

  // Navigation Icons
  arrowRight: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>`,

  arrowRightSmall: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <polyline points="9 18 15 12 9 6"/>
  </svg>`,

  checkmark: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <polyline points="20 6 9 17 4 12"/>
  </svg>`,

  info: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="16" x2="12" y2="12"/>
    <line x1="12" y1="8" x2="12.01" y2="8"/>
  </svg>`,

  // Service Icons (48x48)
  toothSparkle: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M12 3c-1.5 0-2.5 1-3 2s-1.5 3-3 3-2 1-2 3 1 4 2 6 2 4 3 4 1.5-1 3-1 2 1 3 1 2-2 3-4 2-4 2-6-1-3-2-3-2.5-2-3-3-1.5-2-3-2z"/>
    <path d="M8 7l-1.5-1.5M16 7l1.5-1.5M12 3V1"/>
  </svg>`,

  braces: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="3" y="8" width="4" height="8" rx="1"/>
    <rect x="17" y="8" width="4" height="8" rx="1"/>
    <path d="M7 12h10M7 14h10M7 10h10"/>
  </svg>`,

  toothClean: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M12 3c-1.5 0-2.5 1-3 2s-1.5 3-3 3-2 1-2 3 1 4 2 6 2 4 3 4 1.5-1 3-1 2 1 3 1 2-2 3-4 2-4 2-6-1-3-2-3-2.5-2-3-3-1.5-2-3-2z"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>`,

  implant: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M12 2v6M12 8c-2 0-3 1-3 3v8a3 3 0 0 0 6 0v-8c0-2-1-3-3-3z"/>
    <circle cx="12" cy="19" r="2"/>
    <path d="M9 11h6M9 14h6"/>
  </svg>`,

  toothRoot: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M12 3c-1.5 0-2.5 1-3 2s-1.5 3-3 3-2 1-2 3 1 4 2 6 2 4 3 4 1.5-1 3-1 2 1 3 1 2-2 3-4 2-4 2-6-1-3-2-3-2.5-2-3-3-1.5-2-3-2z"/>
    <line x1="12" y1="8" x2="12" y2="16"/>
  </svg>`,

  shine: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M12 3c-1.5 0-2.5 1-3 2s-1.5 3-3 3-2 1-2 3 1 4 2 6 2 4 3 4 1.5-1 3-1 2 1 3 1 2-2 3-4 2-4 2-6-1-3-2-3-2.5-2-3-3-1.5-2-3-2z"/>
    <path d="M12 7v10M9 12h6"/>
  </svg>`,

  gums: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M4 12c0-2 1-3 2-3s2.5 2 3 3 1.5 3 3 3 2-2 3-3 2-3 3-3 2 1 2 3v6H4v-6z"/>
    <path d="M7 9c0-1 .5-2 1-2s1 1 1 2M15 9c0-1 .5-2 1-2s1 1 1 2"/>
  </svg>`,

  childTooth: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M12 3c-1.5 0-2.5 1-3 2s-1.5 3-3 3-2 1-2 3 1 4 2 6 2 4 3 4 1.5-1 3-1 2 1 3 1 2-2 3-4 2-4 2-6-1-3-2-3-2.5-2-3-3-1.5-2-3-2z"/>
    <circle cx="10" cy="10" r="1" fill="currentColor"/>
    <circle cx="14" cy="10" r="1" fill="currentColor"/>
    <path d="M10 13c.5.5 1 1 2 1s1.5-.5 2-1"/>
  </svg>`,

  // Feature Icons (40x40)
  technology: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
    <path d="M7 9l3 3-3 3M13 12h4"/>
  </svg>`,

  team: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>`,

  comfort: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
    <path d="M9 9h6"/>
  </svg>`,

  care: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>`,

  professional: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>`,

  transparency: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>`,

  quality: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>`,

  empathy: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>`,

  // User/Profile Icons
  user: `<svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>`,

  // Placeholder Icons
  image: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <polyline points="21 15 16 10 5 21"/>
  </svg>`,

  building: `<svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>`,

  monitor: `<svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>`,

  mapPin: `<svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>`,

  // Transport Icons
  bus: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <rect x="3" y="8" width="18" height="12" rx="2"/>
    <path d="M3 8V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2"/>
    <circle cx="8" cy="16" r="2"/>
    <circle cx="16" cy="16" r="2"/>
    <path d="M8 16h8"/>
  </svg>`,

  car: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
    <circle cx="7" cy="17" r="2"/>
    <path d="M9 17h6"/>
    <circle cx="17" cy="17" r="2"/>
  </svg>`,
};

/**
 * Helper per ottenere un'icona
 * @param iconName Nome dell'icona da recuperare
 * @returns SVG string o undefined se non trovata
 */
export function getIcon(iconName: keyof typeof ICONS): string {
  return ICONS[iconName as keyof typeof ICONS] || '';
}

/**
 * Type per i nomi delle icone disponibili
 */
export type IconName = keyof typeof ICONS;
