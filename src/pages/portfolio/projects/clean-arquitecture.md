---
layout: /src/layouts/ProjectLayout.astro
title: "Arquitectura Limpia"
description: "Ejemplo práctico de Clean Architecture (Express + TypeScript en backend y React + TypeScript en frontend)."
pubDate: "2025-05-04"
languages: ["node", "express", "ts", "react", "prisma", "redis","swagger"]
image:
  url: "/images/projects/ArquitecturaLimpia.png"
  alt: "Captura del proyecto Proteccion-Mayor"
---

## 🚀 Arquitectura Limpia Country Select

Proyecto de demostración de Arquitectura Limpia usando Express + TypeScript en el backend y React + TypeScript en el frontend. La app permite listar, crear, actualizar y eliminar países como ejemplo para enseñar separación de capas (domain, application, infrastructure).

## 📌 Resumen

- Backend: Express.js con TypeScript, Prisma (SQLite para desarrollo), Redis (cache), tsyringe para inyección de dependencias y routing-controllers para organización de controladores.
- Frontend: React + TypeScript, Vite y Ant Design para la interfaz.
- API REST: documentación con Swagger (OpenAPI) incluida para demostrar y probar los endpoints.
- Objetivo: servir como ejemplo práctico de Clean Architecture aplicado a una pequeña API y un cliente web.


## 🧩 Características

- CRUD completo de países (ID, nombre)
- Cache con Redis para listado de países
- Validaciones simples en controladores
- Test básico (jest) y seed de datos con Prisma
- UI con búsqueda/edición sencilla usando Ant Design

## 🗂️ Estructura del proyecto (resumen)

- backend/
  - src/
    - application/usecases/    (casos de uso)
    - domain/entities/         (entidades del dominio)
    - infrastructure/          (controladores, repositorios, prisma client, redis)
    - config/                  (configuración servidor, swagger)
    - prisma/                  (schema, migraciones, seed)
  - docker-compose.yml

- frontend/
  - src/                      (componentes React, p. ej. `CountrySelect.tsx`)
  - vite.config.ts

## 💡 Tecnologías

- Backend: Node.js, Express, TypeScript, Prisma, Redis, tsyringe, routing-controllers, Swagger (OpenAPI)
- Frontend: React, TypeScript, Vite, Ant Design (antd)
- Base de datos (desarrollo): SQLite (archivo `prisma/dev.db`)
- Testing: Jest


## 🛠️ Instalación y ejecución

A continuación se muestran los pasos para ejecutar localmente. Hay comandos con npm y con pnpm; usar el que prefieras.

### 🖥️ Backend (desde la carpeta `backend`)

1. Instalar dependencias

- Con npm:
  ```bash
  npm install
  ```

- Con pnpm:
  ```bash
  pnpm install
  ```

2. Generar cliente Prisma

- Con npm:
  ```bash
  npx prisma generate
  ```

- Con pnpm:
  ```bash
  pnpm run generate
  ```

3. Ejecutar migraciones y crear la base de datos (SQLite en `prisma/dev.db`)

- Con npm:
  ```bash
  npx prisma migrate dev --name init
  ```

- Con pnpm:
  ```bash
  pnpm run migrate
  ```

> Si necesitas recrear la base de datos durante el desarrollo:
> ```bash
> rm prisma/dev.db
> npx prisma migrate dev --name init
> ```

4. Sembrar datos de ejemplo

- Con npm:
  ```bash
  npm run seed
  ```

- Con pnpm:
  ```bash
  pnpm run seed
  ```

5. Ejecutar backend en modo desarrollo

- Con npm:
  ```bash
  npm run dev
  ```

- Con pnpm:
  ```bash
  pnpm run dev
  ```

6. (Opcional) Usando Docker Compose

En `backend/docker-compose.yml` hay una configuración que puede levantar la app y servicios (p. ej. Redis). Desde `backend`:
    bash
  docker compose up --build
  


### 🌐 Frontend (desde la carpeta `frontend`)

1. Instalar dependencias

- Con npm:
  ```bash
  npm install
  ```

- Con pnpm:
  ```bash
  pnpm install
  ```

2. Ejecutar la app de desarrollo

- Con npm:
  ```bash
  npm run dev
  ```

- Con pnpm:
  ```bash
  pnpm run dev
  ```

Por defecto el frontend hace peticiones a `http://localhost:3000/countries`. Asegúrate que el backend esté levantado en ese puerto o ajusta la URL en `frontend/src/CountrySelect.tsx`.

---

## 🔌 Endpoints principales (API)

- GET /countries — Obtener todos los países (cache Redis)
- GET /countries/:id — Obtener país por id
- POST /countries — Crear país (body: { name })
- PUT /countries/:id — Actualizar país (body: { name })
- DELETE /countries/:id — Eliminar país

La documentación Swagger está configurada en el backend (revisa `src/config/swaggerOptions.ts`).

## 📚 Documentación API (Swagger / OpenAPI)

La API incluye documentación Swagger para facilitar la exploración y prueba de los endpoints. Para verla localmente:

1. Levanta el backend en modo desarrollo (`npm run dev` o `pnpm run dev` desde `backend`).
2. Abre en el navegador la ruta configurada para Swagger (por defecto suele ser `/api-docs` o `/docs`; revisa `src/config/swaggerOptions.ts` para la ruta exacta).

La documentación también expone el JSON OpenAPI (por ejemplo `/api-docs.json`) si necesitas importarlo en herramientas como Postman o Swagger UI.

La documentación facilita probar los endpoints (POST/PUT/DELETE) directamente desde la interfaz web y ver los esquemas de request/response.

La documentación Swagger se configura en `src/config/swaggerOptions.ts` y se monta en el servidor Express al iniciar la aplicación.

La documentación Swagger ayuda a demostrar cómo funciona la API durante la presentación o ayudantía.

---

## 🏗️ Notas sobre la arquitectura

El proyecto sigue principios de Arquitectura Limpia:

- Entities (domain) contienen modelos de negocio.
- Use cases (application) encapsulan la lógica de aplicación.
- Infrastructure contiene adaptadores: repositorios (Prisma), controladores HTTP, cache (Redis).
- Inyección de dependencias con `tsyringe` para desacoplar implementaciones.

Esto facilita pruebas unitarias y el cambio de infra (por ejemplo reemplazar Prisma por otro ORM o cambiar Redis por otra cache) sin afectar la lógica de negocio.

## 🧪 Tests

- Backend: jest

Ejecutar tests (desde `backend`):

- Con npm:
  ```bash
  npm test
  ```

- Con pnpm:
  ```bash
  pnpm test
  ```

---

## ✅ Consejos y pasos comunes

- Si agregas campos al `schema.prisma` asegúrate de correr `npx prisma generate` y crear una migración (`npx prisma migrate dev`).
- Borrar la cache de Redis cuando actualices colecciones (el código ya elimina `countries:all` en altas/modificaciones/eliminaciones).

---

## ⚖️ Licencia y crédito

Proyecto realizado como práctica personal y también como material de apoyo para la ayudantía de la asignatura "Diseño de Software". Está disponible libremente para estudiar, adaptar y reutilizar con fines educativos.

## 🌐 Repositorio

👉 [Ver repositorio](https://github.com/BenjaminEspinozaFK/Ayudantia_Clean_Architecture) 
