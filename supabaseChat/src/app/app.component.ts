import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonicModule, RouterOutlet], // ✅ importante incluir RouterOutlet
  template: `<ion-app><router-outlet></router-outlet></ion-app>`,
})
export class AppComponent {}
