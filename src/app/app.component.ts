// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common'; // Necesario para [class.active]
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    TranslateModule,
    CommonModule 
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
  currentYear: number = new Date().getFullYear();
  menuAbierto = false; 
  whatsappLink: SafeUrl;

  constructor(public translate: TranslateService,
    private sanitizer: DomSanitizer   
  ) { 
    translate.setDefaultLang('en');
    translate.use('en');
    const phoneNumber = 'TUNUMERO_AQUI'; // Ejemplo: '573001234567'
    const message = 'Hola, estoy interesado en sus servicios de limpieza.';
    const encodedMessage = encodeURIComponent(message);
    const unsafeUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    this.whatsappLink = this.sanitizer.bypassSecurityTrustUrl(unsafeUrl);
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
  }

  toggleMenu(): void {
    this.menuAbierto = !this.menuAbierto;
  }

  cerrarMenu(): void {
    this.menuAbierto = false;
  }
}