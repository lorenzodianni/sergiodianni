import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTACT_INFO, STUDIO_INFO } from '../../data/info.data';
import {getIcon, ICONS} from '../../data/icon-dictionary';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, SafeHtmlPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  contactInfo = CONTACT_INFO;
  studioInfo = STUDIO_INFO;
  icons = ICONS;
}
