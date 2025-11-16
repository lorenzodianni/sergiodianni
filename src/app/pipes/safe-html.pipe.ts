import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Pipe per rendere sicuro l'HTML da inserire nei template
 * Utilizzato principalmente per gli SVG del dizionario icone
 *
 * Uso: <div [innerHTML]="ICONS.phone | safeHtml"></div>
 */
@Pipe({
  name: 'safeHtml',
  standalone: true
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
