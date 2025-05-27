import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SupabaseService } from '../supabase.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonicModule, FormsModule, CommonModule],
})
export class LoginPage {
  email = '';
  password = '';

  constructor(private supabase: SupabaseService, private router: Router) {}

  async handleLogin() {
    try {
      await this.supabase.signIn(this.email, this.password);
      this.router.navigateByUrl('/chat');
    } catch (error: any) {
      alert('Error al iniciar sesión: ' + error.message);
    }
  }

  async handleSignUp() {
    try {
      await this.supabase.signUp(this.email, this.password);
      alert('Registrado correctamente. Ahora inicia sesión.');
    } catch (error: any) {
      alert('Error al registrarse: ' + error.message);
    }
  }
}

