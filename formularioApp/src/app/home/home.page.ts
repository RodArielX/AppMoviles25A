import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormularioService } from '../services/formulario.service'; // Importamos el servicio
import { IonicModule } from '@ionic/angular'; // Importamos IonicModule
import { CommonModule } from '@angular/common'; // Importamos CommonModule
import { ReactiveFormsModule } from '@angular/forms'; // Importamos ReactiveFormsModule

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true, // Asegúrate de que el componente sea standalone
  imports: [CommonModule, IonicModule, ReactiveFormsModule], // Asegúrate de importar ReactiveFormsModule
})
export class HomePage {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formularioService: FormularioService  // Inyectamos el servicio
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required],
      interests: [[], Validators.required],
      termsAccepted: [false, Validators.requiredTrue],
    }, { validators: this.passwordMatchValidator });
  }

  // Validación de que las contraseñas coinciden
  passwordMatchValidator(form: FormGroup) {
    return form.get('password')!.value === form.get('confirmPassword')!.value
      ? null : { mismatch: true };
  }

  // Método para enviar los datos a Firebase
  async onSubmit() {
    if (this.registerForm.valid) {
      const { confirmPassword, ...userData } = this.registerForm.value;
      try {
        await this.formularioService.saveUserData(userData);  // Usamos el servicio para guardar
        alert('Usuario registrado exitosamente');
        this.registerForm.reset();
      } catch (error) {
        console.error('Error al registrar usuario:', error);
        alert('Ocurrió un error al registrar');
      }
    } else {
      alert('Formulario inválido');
    }
  }
}



