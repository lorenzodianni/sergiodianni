import {Component} from '@angular/core';
import {CONTACT_INFO, SCHEDULE, STUDIO_INFO} from '../../data/info.data';
import {ICONS} from '../../data/icon-dictionary';
import {SafeHtmlPipe} from '../../pipes/safe-html.pipe';

@Component({
  selector: 'app-contatti',
  imports: [SafeHtmlPipe],
  templateUrl: './contatti.page.html',
  styleUrl: './contatti.page.scss'
})
export class ContattiPage {
  contactInfo = CONTACT_INFO;
  schedule = SCHEDULE;
  icons = ICONS;

  openMap() {
    window.open('https://maps.app.goo.gl/WjvPdzuV5dgcFRjb6', '_blank');
  }
}
