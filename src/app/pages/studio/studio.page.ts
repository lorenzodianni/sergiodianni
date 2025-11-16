import {Component} from '@angular/core';
import {getIcon, IconName, ICONS} from '../../data/icon-dictionary';
import {SafeHtmlPipe} from '../../pipes/safe-html.pipe';
import {CONTACT_INFO, STUDIO_INFO} from '../../data/info.data';

@Component({
  selector: 'app-studio',
  imports: [SafeHtmlPipe],
  templateUrl: './studio.page.html',
  styleUrl: './studio.page.scss'
})
export class StudioPage {
  getIcon = getIcon;
  icons = ICONS;
  STUDIO_INFO = STUDIO_INFO;
  CONTACT_INFO = CONTACT_INFO;
  teamMembers = [
    {
      name: STUDIO_INFO.director,
      role: STUDIO_INFO.directorTitle,
      specialization: 'Implantologia e Odontoiatria Estetica',
      description: 'Esperto in trattamenti canalari e restauri dentali complessi.'
    },
    {
      name: 'Dr.ssa Maria Rossi',
      role: 'Odontoiatra',
      specialization: 'Ortodonzia e Odontoiatria Pediatrica',
      description: 'Specializzata nella cura dei più piccoli e nell\'allineamento dentale.'
    },
    {
      name: 'Dr. Luca Bianchi',
      role: 'Odontoiatra',
      specialization: 'Endodonzia e Conservativa',
      description: 'Oltre 20 anni di esperienza nel campo dell\'odontoiatria moderna.'
    }
  ];

  technologies = [
    'Scanner intraorale digitale 3D',
    'Radiografia panoramica digitale',
    'TAC Cone Beam 3D',
    'Microscopio operatorio',
    'Laser odontoiatrico',
    'Sistema CAD/CAM per protesi'
  ];

  values: { title: string; description: string; icon: IconName }[] = [
    {
      title: 'Professionalità',
      description: 'Ogni membro del nostro team è altamente qualificato e in costante aggiornamento sulle più moderne tecniche odontoiatriche.',
      icon: 'professional'
    },
    {
      title: 'Trasparenza',
      description: 'Crediamo in una comunicazione chiara e onesta. Ogni paziente riceve informazioni complete sui trattamenti proposti.',
      icon: 'transparency'
    },
    {
      title: 'Qualità',
      description: 'Utilizziamo solo materiali certificati e tecnologie all\'avanguardia per garantire risultati eccellenti e duraturi.',
      icon: 'quality'
    },
    {
      title: 'Empatia',
      description: 'Comprendiamo l\'ansia che può accompagnare le visite dentistiche e ci impegniamo a creare un\'esperienza confortevole.',
      icon: 'empathy'
    }
  ];
}
