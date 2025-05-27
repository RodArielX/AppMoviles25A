import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicModule, IonContent, IonList, IonItem, IonInput, IonButton, IonHeader, IonToolbar, IonTitle, IonFooter } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SupabaseService } from '../supabase.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [IonicModule, FormsModule, NgFor, CommonModule],
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit, OnDestroy {
  messages: Array<{ text: string; user_email: string; created_at: string }> = [];
  newMessage: string = '';
  private messageSubscription?: Subscription;

  constructor(private supabaseService: SupabaseService) {}

  ngOnInit() {
    this.loadMessages();

    // Suscribirse a nuevos mensajes en tiempo real
    this.supabaseService.listenForMessages((message) => {
      this.messages = [ 
        {
          text: message.text,
          user_email: message.user_id, // Si quieres el email, hay que obtenerlo aparte
          created_at: message.created_at,
        },
        ...this.messages,
      ];
    });
  }

  ngOnDestroy() {
    // Aquí podrías cancelar suscripciones si las guardas en Subscription
    // Pero supabase channel no devuelve una Subscription de rxjs, para cancelar habría que usar `unsubscribe()` de supabase
  }

  async loadMessages() {
  try {
    this.messages = await this.supabaseService.getMessages();
  } catch (error: unknown) {
    console.error('Error cargando mensajes:', error);
    let errorMsg = 'Error desconocido';

    if (error instanceof Error) {
      errorMsg = error.message;
    } else if (typeof error === 'string') {
      errorMsg = error;
    }

    alert('Error cargando mensajes: ' + errorMsg);
  }
}


  async sendMessage() {
    if (!this.newMessage.trim()) return;
    try {
      await this.supabaseService.sendMessage(this.newMessage.trim());
      this.newMessage = '';
      this.loadMessages();
    } catch (error) {
      console.error('Error enviando mensaje:', error);
    }
  }
}


