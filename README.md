
# Icono + Splash Screen

Implementacion del icono y el Splash Screen del trabajo Photo - Galley

# Requisitos

Se debe crear dos imagenes en formato png con medidas especificas respectivamente, en este caso para el icono tiene que tener 1024 x 1024 px y para el splash screen se necesita 1920 x 1920 px

Por otro lado se coloca las imagenes en una carpeta dentro del proyecto en mi caso le llame resource

![Captura de pantalla 2025-05-18 222639](https://github.com/user-attachments/assets/2a9a17c7-dc5f-42df-8011-c1618fcec198)
![image](https://github.com/user-attachments/assets/1a8125fb-5029-4baf-bdf2-bcb5d4b0edc4)

# Instalacion

En este caso se necesita tener instalado la version mas actual de cordova-res e instalar los plugins para el splash screen

# Implementacion en capacitor

En capacitor.config.ts se debe modificar para que estas funciones valgan 

![image](https://github.com/user-attachments/assets/ff011d35-0b24-4760-a930-e9c25164ddf7)

# Creacion del proyecto

En la terminal del proyecto se ingresa el codigo cordova-res android --icon --skip-config --copy
para que se cree diferentes formatos de las imagenes

Luego se ingresa los comandos: ionic build - ionic cap sync - ionic cap open android

![image](https://github.com/user-attachments/assets/0f1d60f2-3097-4a0c-a28f-d9092610cc56)

# Android studio

En este apartado se espera a que se cree el proyecto dentro de Android y luego probamos con nuestro celular 

![image](https://github.com/user-attachments/assets/de9c917b-3f04-4ab6-bc27-c029a1898192)
![image](https://github.com/user-attachments/assets/2f88d506-f614-4e7b-a4fc-4120b1749d0e)
![image](https://github.com/user-attachments/assets/81af380d-959f-45fc-ad00-15e15dbd4026)

# Apk generada 
![image](https://github.com/user-attachments/assets/084d0149-de08-4435-b3b4-b1abf5dedd22)

