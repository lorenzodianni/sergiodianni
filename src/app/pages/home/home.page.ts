import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ServiceCardComponent} from '../../components/service-card/service-card.component';
import {SERVICES} from '../../data/services.data';
import {CONTACT_INFO, STUDIO_INFO} from '../../data/info.data';
import {getIcon, IconName, ICONS} from '../../data/icon-dictionary';
import {SafeHtmlPipe} from '../../pipes/safe-html.pipe';

@Component({
  selector: 'app-home',
  imports: [ServiceCardComponent, RouterLink, SafeHtmlPipe],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {
  services = SERVICES;
  contactInfo = CONTACT_INFO;
  studioInfo = STUDIO_INFO;
  icons = ICONS;
  CONTACT_INFO = CONTACT_INFO;
  getIcon = getIcon;

  features: { title: string, description: string; icon: IconName }[] = [
    {
      title: 'Tecnologia Avanzata',
      description: 'Utilizziamo le più moderne tecnologie dentali per garantire trattamenti precisi e confortevoli.',
      icon: 'technology'
    },
    {
      title: 'Team Esperto',
      description: 'Il nostro team di professionisti ha anni di esperienza nel settore odontoiatrico.',
      icon: 'team'
    },
    {
      title: 'Ambiente Confortevole',
      description: 'Un ambiente moderno e accogliente dove sentirsi a proprio agio durante ogni visita.',
      icon: 'comfort'
    },
    {
      title: 'Cura Personalizzata',
      description: 'Ogni paziente riceve un piano di trattamento personalizzato per le sue specifiche esigenze.',
      icon: 'care'
    }
  ];
  protected readonly STUDIO_INFO = STUDIO_INFO;
}
