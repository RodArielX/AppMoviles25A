import { Component } from '@angular/core';
import { collection, addDoc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  name = '';
  mapLink: string | null = null;
  isSaving = false;

  constructor(private firestore: Firestore) {}

  async getLocationAndSave() {
    if (!this.name.trim()) {
      alert('Por favor ingresa tu nombre');
      return;
    }

    this.isSaving = true;

    try {
      const position = await this.getCurrentPosition();
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      const link = `https://www.google.com/maps?q=${lat},${lng}`;
      this.mapLink = link;

      await addDoc(collection(this.firestore, 'locationArielAshqui'), {
        name: this.name,
        link: link,
        timestamp: new Date()
      });

      alert('Ubicación guardada correctamente');
    } catch (error) {
      console.error('Error al obtener la ubicación:', error);
      alert('No se pudo obtener la ubicación');
    } finally {
      this.isSaving = false;
    }
  }

  getCurrentPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  openMap() {
    if (this.mapLink) {
      window.open(this.mapLink, '_blank');
    }
  }
}

