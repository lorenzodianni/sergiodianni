import {Component, computed, effect, inject, signal} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {SERVICES} from '../../data/services.data';
import {CONTACT_INFO} from '../../data/info.data';
import {ICONS} from '../../data/icon-dictionary';
import {SafeHtmlPipe} from '../../pipes/safe-html.pipe';
import {toSignal} from '@angular/core/rxjs-interop';
import {map} from 'rxjs';

@Component({
  selector: 'app-service-detail',
  imports: [RouterLink, SafeHtmlPipe],
  templateUrl: './service-detail.page.html',
  styleUrl: './service-detail.page.scss'
})
export class ServiceDetailPage {
  route = inject(ActivatedRoute);
  router = inject(Router);
  contactInfo = CONTACT_INFO;
  icons = ICONS;
  CONTACT_INFO = CONTACT_INFO;
  slug = toSignal(this.route.params.pipe(map(params => params['slug'])));
  service = computed(() => {
    const slug = this.slug();
    return SERVICES.find(s => s.slug === slug);
  })

  public otherServices = computed(() => {
    const slug = this.slug();
    return SERVICES.filter(s => s.slug !== slug);
  })

  constructor() {
    effect(() => {
      if (!this.service()) {
        this.router.navigate(['/']);
      }
    });
  }
}
