---
layout:  /src/layouts/ProjectLayout.astro
title: 'Protección Mayor'
pubDate: 2024-08-18
description: 'Sistema integral de reservas y gestión de servicios para personas mayores desarrollado con React, Express y TypeScript.'
languages: ["react", "express", "ts", "node", "mysql", "nginx", "expo"]
image:
  url: "/images/projects/proteccion.png"
  alt: "Thumbnail de Protección Mayor - Sistema de gestión para personas mayores."
--- 

**Protección Mayor** es un sistema integral de reservas y gestión de servicios diseñado específicamente para personas mayores. El proyecto incluye una plataforma web de administración y una aplicación móvil con alta accesibilidad, permitiendo una gestión ordenada y eficiente de servicios y actividades.
La plataforma cuenta con un sistema de agenda compartida para la coordinación de actividades y ofrece una experiencia optimizada tanto para administradores como para usuarios finales.

## 🧩 Características

- Sistema de reservas y gestión de servicios especializado
- Aplicación móvil con alta accesibilidad para personas mayores
- Plataforma de administración web intuitiva
- Sistema de agenda compartida para coordinación de actividades
- Interfaz optimizada para facilidad de uso
- Arquitectura modular con múltiples servicios
- Descarga directa de APK mediante código QR

## 💡 Tecnologías utilizadas

## Frontend
- React
- TypeScript

## Backend
- Express.js
- Node.js LTS
- TypeScript
- Socket.io para comunicación en tiempo real

## Base de datos
- MySQL

## Infraestructura
- Nginx (Servidor web y proxy inverso)
- pNPM (Gestor de paquetes)

## Móvil:
- Expo 

## 🚀 Despliegue
El sistema requiere un servidor con las siguientes características:

-MySQL
-Node.js LTS
-Nginx
-pNPM

## Instalación de dependencias globales:
-pnpm install -g @socket.io/pm2

-pnpm install -g dotenv-cli
## Proceso de despliegue:
1.-Clonar el repositorio

2.-Instalar dependencias: pnpm install

3.-Configurar variables de entorno

4.-Ejecutar: ./deployment.sh build

5.-Configurar Nginx y reiniciar servicios

## 🌐 Repositorio

👉 [Ver repositorio](https://github.com/MrRevillod/Proteccion-Mayor) 

## 📱 Aplicación móvil

La aplicación móvil está disponible en formato APK y puede descargarse escaneando el código QR disponible en el repositorio. Está diseñada con alta accesibilidad para facilitar su uso por parte de personas mayores.

## 🎯 Objectivo

Protección Mayor busca brindar una solución tecnológica integral que facilite el acceso a servicios para personas mayores, combinando una administración eficiente con una interfaz accesible y fácil de usar. El proyecto forma parte del Taller de Integración III y representa un enfoque centrado en la inclusión digital y la mejora de la calidad de vida.

