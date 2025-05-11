import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormularioService } from '../services/formulario.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  datos = {
    nombre: '',
    correo: '',
    telefono: '',
    genero: '',
    nacimiento: '',
    intereses: [],
    origen: '',
    noticias: ''
  };

  opcionesIntereses = ['Deportes', 'Arte', 'Ciencia', 'Viajes'];
  opcionesOrigen = ['Redes Sociales', 'Recomendación', 'Búsqueda Web'];
  opcionesNoticias = ['Sí', 'No'];

  constructor(private formService: FormularioService) { }

  enviar() {
    this.formService.guardarFormulario(this.datos).then(() => {
      alert('Formulario guardado correctamente');
      this.datos = {
        nombre: '',
        correo: '',
        telefono: '',
        genero: '',
        nacimiento: '',
        intereses: [],
        origen: '',
        noticias: ''
      };
    }).catch((error) => {
      console.error('Error al guardar el formulario:', error);
      alert('Hubo un error al guardar el formulario. Inténtalo de nuevo.');
    });
  }
}
