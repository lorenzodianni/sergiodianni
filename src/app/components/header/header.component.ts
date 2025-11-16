import {Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {CONTACT_INFO, STUDIO_INFO} from '../../data/info.data';
import {ICONS} from '../../data/icon-dictionary';
import {SafeHtmlPipe} from '../../pipes/safe-html.pipe';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, SafeHtmlPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  contactInfo = CONTACT_INFO;
  STUDIO_INFO = STUDIO_INFO;
  icons = ICONS;
  isMenuOpen = signal(false);

  toggleMenu(): void {
    this.isMenuOpen.update(isOpen => !isOpen)
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
