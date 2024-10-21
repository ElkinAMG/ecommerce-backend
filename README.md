Por supuesto, aquí tienes el README.md actualizado con la sección de tecnologías utilizadas y el enlace al repositorio.

---

# Ecommerce Backend

Este es el backend del proyecto Ecommerce, construido con Node.js y TypeScript. Utiliza TypeORM para la gestión de la base de datos y Supabase como gestor de base de datos.

## Tecnologías Utilizadas

Este proyecto emplea las siguientes tecnologías:

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **Express**: Framework web para Node.js que facilita la creación de APIs.
- **TypeORM**: ORM (Object-Relational Mapping) que facilita la interacción con la base de datos.
- **Supabase**: Plataforma de backend como servicio que ofrece base de datos y autenticación.
- **dotenv**: Para cargar variables de entorno desde un archivo `.env`.
- **pg**: Cliente PostgreSQL para Node.js.

## Prerequisitos

Asegúrate de tener lo siguiente instalado en tu máquina:

- **Node.js** (versión 16 o superior)
- **npm** o **Yarn** (como gestor de paquetes)

## Variables de Entorno

Antes de ejecutar el proyecto, necesitarás configurar las variables de entorno. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```
PORT=3000
DB_HOST=aws-0-us-east-1.pooler.supabase.com
DB_PORT=6543
DB_USER=postgres.fkpffyvxexglgzhvmlvz
DB_PASSWORD=iR8t3DxqXkKQDu86
DB_NAME=postgres
SUPABASE_URL='https://fkpffyvxexglgzhvmlvz.supabase.co'
SUPABASE_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrcGZmeXZ4ZXhnbGd6aHZtbHZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkxNjU3MzgsImV4cCI6MjA0NDc0MTczOH0.TTVG6bWuIPqtPALu-ZnUGKjWwzx4FvuvfcVC-z0WFx0'
```

Asegúrate de que los valores son correctos para tu configuración de Supabase.

## Instalación y Configuración

Sigue estos pasos para instalar y ejecutar el proyecto de forma local.

### 1. Clona el Repositorio

Abre tu terminal y ejecuta el siguiente comando:

```bash
git clone https://github.com/ElkinAMG/ecommerce-backend.git
```

### 2. Navega al Directorio del Proyecto

Cambia al directorio del proyecto:

```bash
cd ecommerce-backend
```

### 3. Instala las Dependencias

Utiliza npm o Yarn para instalar las dependencias del proyecto:

```bash
npm install
```
o
```bash
yarn install
```

### 4. Ejecuta el Servidor de Desarrollo

Una vez que las dependencias estén instaladas, puedes iniciar el servidor de desarrollo:

```bash
npm run dev
```
o
```bash
yarn dev
```

Esto iniciará el servidor, y deberías ver un mensaje que indica que la aplicación está corriendo en `http://localhost:3000`.

### 5. Explora el Proyecto

Ahora puedes explorar el backend del proyecto Ecommerce, que incluye la gestión de la base de datos a través de Supabase y la lógica de negocio necesaria para la aplicación.

### 6. Comandos Útiles

Aquí hay algunos comandos adicionales que pueden ser útiles:

- **Ejecutar Migraciones de TypeORM**:
  ```bash
  npm run typeorm migration:run
  ```
  o
  ```bash
  yarn typeorm migration:run
  ```

## Contribuciones

Si deseas contribuir al proyecto, siéntete libre de bifurcar el repositorio, hacer tus cambios y enviar una solicitud de extracción.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

## Agradecimientos

¡Gracias por revisar el backend del proyecto Ecommerce! Si tienes alguna pregunta, no dudes en abrir un problema en el repositorio.

---