import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface User {
  username: string;
  email: string;
  password: string;
  birthDate: string;
  gender: string;
  interests: string[];
  termsAccepted: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(private firestore: Firestore) { }

  // Método para guardar los datos del formulario en Firebase
  async saveUserData(user: User): Promise<void> {
    try {
      const usersRef = collection(this.firestore, 'users');
      await addDoc(usersRef, user);
      console.log('Usuario guardado exitosamente');
    } catch (error) {
      console.error('Error al guardar usuario:', error);
    }
  }
}


