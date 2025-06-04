// src/app/feature/home/home.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Si usas routerLink aquí
import { TranslateModule } from '@ngx-translate/core'; // <--- ¡ASEGÚRATE DE QUE ESTÉ AQUÍ!

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,    // Necesario si usas [routerLink] en home.component.html
    TranslateModule  // <--- ¡ASEGÚRATE DE QUE ESTÉ AQUÍ!
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor() {
    // Puedes inyectar TranslateService aquí si necesitas lógica de traducción en el componente
  }
}