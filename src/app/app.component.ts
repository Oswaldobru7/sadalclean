import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  whatsappLink!: SafeUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private translate: TranslateService 
  ) {
    const phoneNumber = 'TUNUMERO_AQUI'; // REEMPLAZA con tu número de WhatsApp
    const messageKey = 'CONTACT_INFO_SHARED.WHATSAPP_GREETING'; // Clave para el mensaje traducido
    
    this.translate.get(messageKey).subscribe((translatedMessage: string) => {
      const encodedMessage = encodeURIComponent(translatedMessage || 'Hola, estoy interesado en sus servicios.');
      const unsafeUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      this.whatsappLink = this.sanitizer.bypassSecurityTrustUrl(unsafeUrl);
    });

    
  }
}
