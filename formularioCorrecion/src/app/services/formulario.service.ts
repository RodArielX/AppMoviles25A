import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  constructor(private firestore: Firestore) {}

  guardarFormulario(data: any) {
    const ref = collection(this.firestore, 'formularioCorrecion');
    return addDoc(ref, data)
      .then((docRef) => {
        console.log('Formulario guardado con ID:', docRef.id);
        return docRef;
      })
      .catch((error) => {
        console.error('Error al guardar el formulario:', error);
        throw error; // Lanza el error para manejarlo donde lo llames
      });
  }
}


