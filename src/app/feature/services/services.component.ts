import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Si usas routerLink aquí
import { TranslateModule } from '@ngx-translate/core'; // <--- ¡ASEGÚRATE DE QUE ESTÉ AQUÍ!

@Component({
  selector: 'app-services',
  imports: [  RouterModule,    
    TranslateModule ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
