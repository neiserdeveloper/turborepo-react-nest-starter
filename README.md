<div align="center">

<img src="https://yt3.googleusercontent.com/NOPak2miuxWp7AJUUJe_pVbBFkFRt4URg-gqw9w8-9-UfOdGy3lj4V1Zhp7bBhHVcJTnLCspnw=s160-c-k-c0x00ffffff-no-rj" alt="Neiser.dev" width="80" />

# Turborepo · React + NestJS Starter

**Monorepo fullstack listo para producción.**
React (Vite) en el frontend, NestJS en el backend, todo orquestado con Turborepo.

[![License](https://img.shields.io/badge/license-MIT-purple.svg)](LICENSE)
[![Turborepo](https://img.shields.io/badge/Turborepo-2.9-EF4444?logo=turborepo&logoColor=white)](https://turbo.build/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![NestJS](https://img.shields.io/badge/NestJS-11-E0234E?logo=nestjs&logoColor=white)](https://nestjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![pnpm](https://img.shields.io/badge/pnpm-10.33-F69220?logo=pnpm&logoColor=white)](https://pnpm.io/)

[📺 Ver video](#-video-tutorial) · [🚀 Quick Start](#-quick-start) · [💬 Discord](https://discord.gg/A77w9BKzN) · [🌐 neisercp.dev](https://neisercp.dev)

</div>

---

## 📌 Sobre este proyecto

Este repositorio es un **template real de producción** para construir aplicaciones fullstack con un monorepo bien estructurado. Pensado para devs que ya conocen React y NestJS y quieren dar el siguiente paso: **organizar su código y desplegarlo profesionalmente**.

> 💡 No es un tutorial de "Hola Mundo". Es la base que uso en proyectos reales como Senior Software Engineer.

---

## 🎯 ¿Qué vas a encontrar aquí?

- ✅ Monorepo configurado con **Turborepo** y **pnpm workspaces**
- ✅ Frontend en **React 19 + Vite 6 + TypeScript + TailwindCSS 4**
- ✅ Backend en **NestJS 11 + TypeScript + SWC**
- ✅ Base de datos con **Prisma 6 + PostgreSQL**
- ✅ Tipos compartidos entre frontend y backend (DRY de verdad)
- ✅ Configuración optimizada para deploy en **Vercel + Render**
- ✅ Variables de entorno bien organizadas
- ✅ Scripts unificados para desarrollo

---

## 🏗️ Estructura del proyecto

```
turborepo-react-nest-starter/
├── apps/
│   ├── web/                  # Frontend: React 19 + Vite 6 + TailwindCSS 4
│   └── api/                  # Backend: NestJS 11 + Prisma 6
├── packages/
│   └── types/                # Tipos TypeScript compartidos (User, ApiResponse)
├── turbo.json                # Configuración de Turborepo
├── pnpm-workspace.yaml       # Workspaces de pnpm
└── package.json              # Scripts globales
```

---

## 🚀 Quick Start

### Requisitos previos

- **Node.js** 18+ ([descargar](https://nodejs.org/))
- **pnpm** 9+ — instalación: `npm install -g pnpm`
- **PostgreSQL** — local o en la nube ([Neon](https://neon.tech) recomendado)

---
### Instalación

```bash
# Clonar el repo
git clone -b starter https://github.com/neiserdeveloper/turborepo-react-nest-starter
cd turborepo-react-nest-starter
```
---

### 🔧 Levantar el Backend (API)

```bash
cd apps/api

# 1. Configurar variables de entorno
cp .env.example .env
# ⚠️ Editar .env con tu DATABASE_URL real

# 2. Instalar dependencias
pnpm install

# 3. Crear las tablas en la base de datos
pnpm prisma:migrate

# 4. Crear usuarios de ejemplo
pnpm prisma:seed

# 5. Levantar en modo desarrollo
pnpm dev
```

> ⚡ API corriendo en **http://localhost:3001**

**Endpoints disponibles:**
| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/users` | Lista todos los usuarios |
| `GET` | `/users/:id` | Obtiene un usuario por ID |
| `POST` | `/users` | Crea un nuevo usuario |

> 💡 **Tip:** Ejecuta `pnpm prisma:studio` para ver y editar la BD visualmente en http://localhost:5555

---

### 🌐 Levantar el Frontend (Web)

```bash
cd apps/web

# 1. Configurar variables de entorno
cp .env.example .env

# 2. Instalar dependencias
pnpm install

# 3. Levantar en modo desarrollo
pnpm dev
```

> 🌐 Frontend corriendo en **http://localhost:5173**

> ⚠️ Asegúrate de que la API esté corriendo primero para ver los datos.

---

### 📦 Sobre `packages/types`

Este paquete contiene **tipos TypeScript compartidos** entre el frontend y el backend:

```ts
// packages/types/src/index.ts
export interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}
```

Cuando configures Turborepo con `pnpm workspaces`, ambas apps importarán estos tipos así:
```ts
import { User, ApiResponse } from '@repo/types';
```

Esto aplica el principio **DRY** — defines los tipos una vez, los usas en todo el monorepo.

---

## 🌍 Variables de entorno

### `apps/api/.env`

```env
PORT=3001
DATABASE_URL=postgresql://usuario:password@localhost:5432/tu_base_de_datos
CORS_ORIGIN=http://localhost:5173
```

### `apps/web/.env`

```env
VITE_API_URL=http://localhost:3001
```

> 📝 En producción, configura estas variables en el panel de tu plataforma de deploy (Vercel, Render, etc.).

---

## 📜 Scripts disponibles

### API (`apps/api`)

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Levanta la API con hot-reload (SWC) |
| `pnpm build` | Compila para producción |
| `pnpm start` | Ejecuta el build de producción |
| `pnpm prisma:migrate` | Ejecuta migraciones de la BD |
| `pnpm prisma:seed` | Llena la BD con datos de ejemplo |
| `pnpm prisma:studio` | Abre el editor visual de la BD |

### Web (`apps/web`)

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Levanta el frontend con Vite |
| `pnpm build` | Compila para producción |
| `pnpm preview` | Preview del build de producción |

---

## 🚢 Deploy

Este monorepo está optimizado para desplegar:

- **Frontend** → [Vercel](https://vercel.com) (Root Directory: `apps/web`)
- **Backend** → [Render](https://render.com) (Root Directory: `apps/api`)
- **Base de datos** → [Neon](https://neon.tech) (PostgreSQL serverless)

Todo el proceso de deploy está explicado paso a paso en el video del canal.

---

## 📺 Video tutorial

Mira el video completo en mi canal de YouTube:

<div align="center">

[![Ver video en YouTube](https://img.shields.io/badge/Ver%20en%20YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/@neisercp)

**[Monorepo React + NestJS en Producción en 20 minutos | Turborepo + Render + Vercel](#)**

</div>

---

## 🛠️ Stack tecnológico

<table>
<tr>
<td valign="top">

**Frontend**
- React 19
- Vite 6
- TypeScript 5.7
- TailwindCSS 4

</td>
<td valign="top">

**Backend**
- NestJS 11
- Prisma 6
- PostgreSQL
- SWC (compilador)

</td>
<td valign="top">

**Tooling**
- Turborepo 2
- pnpm Workspaces
- ESLint
- Prettier

</td>
</tr>
</table>

---

## 🤝 Comunidad

¿Dudas, sugerencias o quieres conectar con otros devs? Únete a la comunidad:

[![Discord](https://img.shields.io/badge/Discord-Únete-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/A77w9BKzN)

---

## 📄 Licencia

MIT © [Neiser Custodio](https://neisercp.dev)

---

<div align="center">

**¿Te sirvió este proyecto?** Dale ⭐ al repo, eso me ayuda mucho.

Hecho con 💜 desde Lima, Perú 🇵🇪

[Web](https://neisercp.dev) · [YouTube](https://youtube.com/@neisercp) · [LinkedIn](https://www.linkedin.com/in/neisercustodio) · [GitHub](https://github.com/neiserdeveloper)

</div>
