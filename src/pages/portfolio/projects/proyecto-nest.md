---
layout: /src/layouts/ProjectLayout.astro
title: "Proyecto NestJS + React Auth"
description: ""
pubDate: "2025-05-04"
languages: ["nestjs", "ts", "react", "prisma", "postgresql", "docker", "jwt", "swagger"]
image:
  url: "/images/projects/nestjs-icon.png"
  alt: "Captura del proyecto Proteccion-Mayor"
---


## Proyecto NestJS + React Auth

Sistema completo de autenticación con JWT usando NestJS como backend y React como frontend.

Este proyecto fue desarrollado como proyecto de estudio para aprender el ecosistema de NestJS: uso de decoradores, DTOs, pipes, validadores y el patrón típico de organización de módulos. No está pensado como producto en producción, sino como ejercicio práctico para consolidar conceptos y herramientas.


## 📁 Estructura del Proyecto


- proyecto_nest/
    - backend/           # API NestJS con autenticación JWT
    - frontend/          # Aplicación React con TypeScript
    - env              # Variables de entorno compartidas
    - .gitignore        # Archivos ignorados por Git
    - README.md         # Este archivo


## 🚀 Cómo ejecutar el proyecto

### Prerrequisitos

- Node.js >= 18
- Docker Desktop
- pnpm (recomendado) o npm

### 1. Configurar el Backend (NestJS)

- bash
- cd backend
- pnpm install
- docker-compose up -d  # Inicia PostgreSQL
- pnpm run start:dev    # Servidor en http://localhost:3000


### 2. Configurar el Frontend (React)
- bash
- cd frontend/auth-frontend
- npm install
- npm start  # Servidor en http://localhost:3001


## 🔐 Características del Sistema

### Backend (NestJS)

- ✅ Autenticación JWT completa
- ✅ Registro y login de usuarios
- ✅ Encriptación de contraseñas con bcrypt
- ✅ Validación de datos con class-validator
- ✅ Base de datos PostgreSQL con Prisma ORM
- ✅ Documentación con Swagger
- ✅ CORS habilitado para frontend

### Frontend (React + TypeScript)

- ✅ Interfaz de login y registro
- ✅ Manejo de estado con Context API
- ✅ Persistencia de tokens en localStorage
- ✅ Componentes TypeScript reutilizables
- ✅ Estilos CSS modernos con gradientes
- ✅ Validación de formularios
- ✅ Dashboard de usuario logueado

## 📊 API Endpoints

### Autenticación

- `POST /auth/login` - Iniciar sesión
- `POST /auth/register` - Registrar usuario

### Usuarios

- `GET /user` - Obtener todos los usuarios
- `GET /user/:id` - Obtener usuario por ID
- `POST /user` - Crear usuario
- `PUT /user/:id` - Actualizar usuario
- `DELETE /user/:id` - Eliminar usuario

### Administradores

- `GET /admin` - Obtener todos los admins
- `GET /admin/:id` - Obtener admin por ID
- `POST /admin` - Crear admin
- `PUT /admin/:id` - Actualizar admin
- `DELETE /admin/:id` - Eliminar admin

## 🧪 Cómo probar

1. **Abrir http://localhost:3001**
2. **Registrar un nuevo usuario** con:
   - Nombre (mínimo 2 caracteres)
   - Email válido
   - Edad (número)
   - Contraseña (mínimo 6 caracteres)
3. **Iniciar sesión** con email y contraseña
4. **Ver dashboard** con información del usuario
5. **Cerrar sesión** para volver al login

## 📱 Tecnologías Utilizadas

### Backend

- **NestJS** - Framework de Node.js
- **Prisma** - ORM para base de datos (migrations y client)
- **PostgreSQL** - Base de datos (Docker / docker-compose para desarrollo)
- **JWT** - Autenticación con tokens (@nestjs/jwt / Passport)
- **bcryptjs** - Encriptación de contraseñas
- **class-validator** y **class-transformer** - Validación y transformación de DTOs
- **DTOs y decoradores** - Uso de DTOs, validadores y decoradores personalizados para manejo de datos
- **Swagger (OpenAPI)** - Documentación de la API
- **CORS** - Configuración para permitir peticiones desde el frontend

### Frontend

- **React** - Librería de UI
- **TypeScript** - Tipado estático
- **Context API** - Manejo de estado y sesión
- **Persistencia en localStorage** - Guardado de tokens para sesión
- **React Router** - Navegación en la aplicación
- **CSS3 / estilos modernos** - Diseño y componentes reutilizables

### Herramientas y conceptos adicionales

- **Docker / docker-compose** - Para levantar servicios (PostgreSQL) en desarrollo
- **Validación en servidor y cliente** - class-validator en backend y validaciones en formularios en frontend
- **Arquitectura modular** de NestJS (módulos, controladores, servicios, providers)
- **Buenas prácticas de seguridad básicas** (hash de contraseñas, manejo de tokens)

## 🔄 Estado del Proyecto

- ✅ Backend completamente funcional
- ✅ Frontend con interfaz moderna
- ✅ Autenticación JWT working
- ✅ Base de datos configurada
- ✅ CORS configurado
- ✅ Validaciones implementadas
- ✅ Manejo de errores
- ✅ Persistencia de sesión

## 🌐 Repositorio

👉 [Ver repositorio](https://github.com/BenjaminEspinozaFK/proyecto_nest) 
