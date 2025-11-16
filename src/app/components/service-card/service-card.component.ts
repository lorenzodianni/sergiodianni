import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Service} from '../../data/services.data';
import {getIcon, ICONS} from '../../data/icon-dictionary';
import {SafeHtmlPipe} from '../../pipes/safe-html.pipe';

@Component({
  selector: 'app-service-card',
  imports: [RouterLink, SafeHtmlPipe],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  @Input({required: true}) service!: Service;
  icons = ICONS;
  getIcon = getIcon;
}
