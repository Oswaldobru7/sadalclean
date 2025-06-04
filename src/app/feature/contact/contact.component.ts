import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [TranslateModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  onSubmit(form: NgForm) {  
    if (form.valid) {
      // Aquí puedes implementar la lógica para enviar el formulario
      console.log('Form submitted:', form.value);
      // Puedes usar un servicio para enviar los datos a tu backend o a un servicio de email
    } else {
      console.log('Form is invalid');
    }
  }
}
