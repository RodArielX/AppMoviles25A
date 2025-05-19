import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'photo-gallery',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,        // Duración del splash (3 segundos)
      launchAutoHide: true,            // Auto-ocultar el splash después de la duración
      showSpinner: false,              // Ocultar el spinner
      splashFullScreen: true,          // Splash en pantalla completa
      splashImmersive: true,           // Ocultar la barra de estado (solo Android)
      backgroundColor: '#ffffff',      // Color de fondo del splash
      androidSplashResourceName: 'splash',  // Recurso del splash para Android
      androidScaleType: 'CENTER_CROP', // Ajuste de la imagen en Android
      iosContentMode: 'scaleAspectFill'// Ajuste de la imagen en iOS
    }
  }
};

export default config;

