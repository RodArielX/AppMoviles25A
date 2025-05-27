import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  // ✅ Registro de usuario
  async signUp(email: string, password: string) {
    const { error } = await this.supabase.auth.signUp({ email, password });
    if (error) throw error;
  }

  // ✅ Inicio de sesión
  async signIn(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  }

  // ✅ Obtener usuario actual
  async getCurrentUser(): Promise<User | null> {
    const {
      data: { user },
      error,
    } = await this.supabase.auth.getUser();

    if (error) throw error;
    return user;
  }

  // ✅ Obtener mensajes con email del autor
  // Obtener mensajes SIN email del autor para evitar error
  async getMessages() {
  const { data, error } = await this.supabase
    .from('messages_with_users')
    .select('id, text, user_id, created_at, email')
    .order('created_at', { ascending: false });

  if (error) throw error;

  return data.map((msg: any) => ({
    id: msg.id,
    text: msg.text,
    user_email: msg.email ?? 'Desconocido',
    created_at: msg.created_at,
  }));
}


  // ✅ Enviar mensaje con el ID del usuario actual
  async sendMessage(text: string) {
    const user = await this.getCurrentUser();
    if (!user) throw new Error('Usuario no autenticado');

    const { error } = await this.supabase.from('messages').insert({
      text,
      user_id: user.id,
      group_id: 1, // ajusta si usas grupos
    });

    if (error) throw error;
  }

  // ✅ Suscripción a nuevos mensajes
  listenForMessages(callback: (message: any) => void) {
  this.supabase
    .channel('public:messages')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, async (payload) => {
      // Cuando recibimos un mensaje nuevo, vamos a buscar el email en la vista para ese mensaje
      const { data, error } = await this.supabase
        .from('messages_with_users')
        .select('id, text, user_id, created_at, email')
        .eq('id', payload.new['id'])
        .single();

      if (error) {
        console.error('Error fetching new message with user email:', error);
        callback(payload.new); // fallback si falla la vista
        return;
      }

      callback({
        id: data.id,
        text: data.text,
        user_email: data.email ?? 'Desconocido',
        created_at: data.created_at,
      });
    })
    .subscribe();
}
}



