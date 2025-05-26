import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { supabase } from "src/app/supabase.client";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonButton,
    IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AuthPage implements OnInit {

  email ='';
  password = '';
  error = '';


  constructor(private router: Router) { }

  async login(){
    const {error} = await supabase.auth.signInWithPassword({
      email: this.email,
      password: this.password
    });
    if (error) this.error=error.message;
    else this.router.navigate(['/home']);
  }

  async register(){
    const {error}=await supabase.auth.signUp({
      email: this.email,
      password: this.password
    });
    if(error) this.error=error.message;
    else alert('Registro correcto, verificar tu correo');
  }

  ngOnInit() {
  }

}
