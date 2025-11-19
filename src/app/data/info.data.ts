export const CONTACT_INFO = {
  phone: '+39 02 1234567',
  email: `
<div class="email">
<span>i</span>
<span class="nsd">x</span>
<span>n</span>
<span class="nsd">x</span>
<span>f</span>
<span class="nsd">x</span>
<span>o</span>
<span class="nsd">x</span>
<span>@</span>
<span class="nsd">x</span>
<span>s</span>
<span class="nsd">x</span>
<span>t</span>
<span class="nsd">x</span>
<span>u</span>
<span class="nsd">x</span>
<span>d</span>
<span class="nsd">x</span>
<span>i</span>
<span class="nsd">x</span>
<span>o</span>
</div>
  `,
  pec: 'studio@pec.it',
  address: {
    street: 'Viale delle Medaglie d\'Oro 176',
    city: 'Roma',
    province: 'RM',
    postalCode: '00135',
    full: `Viale delle Medaglie d'Oro 176, 00135 Roma RM`
  },
  partitaIva: 'IT12345678901'
} as const;

export const SCHEDULE = [
  {day: 'Lunedì', hours: '9:00 - 19:00'},
  {day: 'Martedì', hours: '9:00 - 19:00'},
  {day: 'Mercoledì', hours: '9:00 - 19:00'},
  {day: 'Giovedì', hours: '9:00 - 19:00'},
  {day: 'Venerdì', hours: '9:00 - 19:00'},
  {day: 'Sabato', hours: 'Chiuso'},
  {day: 'Domenica', hours: 'Chiuso'}
] as const;

// Informazioni generali studio
export const STUDIO_INFO = {
  tagline: 'Il tuo sorriso è la nostra priorità',
  director: `Dr. Sergio D'Ianni`,
  directorTitle: 'Odontoiatra'
} as const;
