import { RenderMode, ServerRoute } from '@angular/ssr';
import { SERVICES } from './data/services.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'servizi/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      // Genera tutti i percorsi per i servizi
      return SERVICES.map(service => ({ slug: service.slug }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
