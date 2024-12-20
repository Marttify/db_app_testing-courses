
# BackEnd API para gestión de estudiantes, cursos y materias

Este proyecto es una API backend construida con **Node.js**, **Express**, y **Sequelize**, diseñada para gestionar entidades como estudiantes, cursos, materias y sus relaciones. Ideal para prácticas en el desarrollo de aplicaciones backend.

## Características

- CRUD completo para estudiantes, cursos y materias.
- Relación N:M entre estudiantes y materias.
- Base de datos SQLite en memoria (puede cambiarse a otras bases de datos compatibles con Sequelize).
- Semilla de datos (`seed.js`) para inicializar la base de datos con información de ejemplo.
- Modularidad para una fácil escalabilidad.

## Tecnologías Utilizadas

- **Node.js**
- **Express**
- **Sequelize**
- **SQLite**

## Requisitos Previos

- Node.js instalado en tu sistema.
- npm o yarn para manejar las dependencias.

## Instalación

1. **Clona este repositorio**:
   ```bash
   git clone https://github.com/Marttify/db_app_testing-courses.git
   cd tu-repo
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Configura la base de datos**:
   - La configuración por defecto usa SQLite en memoria. Si deseas cambiar a otra base de datos, actualiza el archivo `database.js` según la documentación de Sequelize.

## Uso

### 1. Inicia el servidor
Ejecuta el servidor backend:
```bash
nodemon index.js
```
El servidor estará disponible en [http://localhost:3000](http://localhost:3000).

### 2. Inicializa la base de datos con datos de prueba
Ejecuta el archivo `seed.js` para llenar la base de datos:
```bash
nodemon seed.js
```

### 3. Endpoints disponibles
#### **Estudiantes**
- `GET /estudiantes` - Listar todos los estudiantes.
- `POST /estudiantes` - Crear un nuevo estudiante.
- `PUT /estudiantes/:id` - Actualizar un estudiante por ID.
- `DELETE /estudiantes/:id` - Eliminar un estudiante por ID.

#### **Cursos**
- `GET /cursos` - Listar todos los cursos.
- `POST /cursos` - Crear un nuevo curso.
- `PUT /cursos/:id` - Actualizar un curso por ID.
- `DELETE /cursos/:id` - Eliminar un curso por ID.

#### **Materias**
- `GET /materias` - Listar todas las materias.
- `POST /materias` - Crear una nueva materia.
- `PUT /materias/:id` - Actualizar una materia por ID.
- `DELETE /materias/:id` - Eliminar una materia por ID.

#### **Materias por Estudiante**
- `GET /materias-por-estudiante` - Listar todas las relaciones entre materias y estudiantes.
- `POST /materias-por-estudiante` - Crear una nueva relación.
- `DELETE /materias-por-estudiante/:id` - Eliminar una relación por ID.

## Estructura del Proyecto

```
server/
├── index.js            # Archivo principal para iniciar el servidor
├── database.js         # Configuración de Sequelize y definición de modelos
├── seed.js             # Script para inicializar datos en la base de datos
├── package.json        # Dependencias y scripts del proyecto
```

## Personalización

Si deseas usar otra base de datos o realizar ajustes:
1. Modifica el archivo `database.js` para actualizar la configuración.
2. Asegúrate de instalar los controladores necesarios (por ejemplo, `mysql2` o `pg` para MySQL/PostgreSQL).

## Contribución

Si encuentras un error o deseas contribuir:
1. Crea un fork de este repositorio.
2. Realiza tus cambios y crea un pull request.
