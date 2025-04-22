import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  nombre: string = '';

  // Definir la función handleRefresh
  handleRefresh(event: any) {
    console.log('Refreshing...');

    // Simula un tiempo de carga de 2 segundos
    setTimeout(() => {
      console.log('Refresh complete');
      event.target.complete();  // Esta línea marca el fin del proceso de refresco
    }, 2000);
  }
}
