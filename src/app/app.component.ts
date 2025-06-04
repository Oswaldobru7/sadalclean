// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentYear: number = new Date().getFullYear();

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    const supportedLang = browserLang?.match(/en|es/) ? browserLang : 'en';
    translate.setDefaultLang('en'); 
    translate.use('en');   
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
  }
}