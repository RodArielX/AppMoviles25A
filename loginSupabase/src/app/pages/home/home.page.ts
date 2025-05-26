import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { supabase } from "src/app/supabase.client";
import { Router } from "@angular/router";


@Component({
  
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonButton,  
    IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HomePage implements OnInit {
  email='';

  constructor(private router:Router) { }

  async ngOnInit() {
    const {data,error} = await supabase.auth.getUser();
    if (error || !data.user) {
      this.router.navigate(['/auth'])
    } else {
      this.email = data.user.email || '';
    }
  }

  async logout(){
    await supabase.auth.signOut();
    this.router.navigate(['/auth']);
  }

}
