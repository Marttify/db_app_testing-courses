import { Estudiante, Curso, Materia, MateriasPorEstudiante, sequelize } from './database.js';

const estudiantes = [
  { nombre: 'Juan', apellido: 'Pérez', email: 'juan.perez@example.com' },
  { nombre: 'Ana', apellido: 'García', email: 'ana.garcia@example.com' },
  { nombre: 'Carlos', apellido: 'Sánchez', email: 'carlos.sanchez@example.com' },
  { nombre: 'María', apellido: 'López', email: 'maria.lopez@example.com' },
  { nombre: 'Pedro', apellido: 'Gómez', email: 'pedro.gomez@example.com' },
];

const cursos = [
  { nombre_curso: 'Ingeniería de Software', nivel: 'Licenciatura' },
  { nombre_curso: 'Análisis de Datos', nivel: 'Maestría' },
  { nombre_curso: 'Desarrollo Web', nivel: 'Diplomado' },
];

const materias = [
  { nombre_materia: 'Programación', curso_id: 1 },
  { nombre_materia: 'Bases de Datos', curso_id: 1 },
  { nombre_materia: 'Matemáticas Avanzadas', curso_id: 2 },
  { nombre_materia: 'Estadística', curso_id: 2 },
  { nombre_materia: 'Diseño Web', curso_id: 3 },
  { nombre_materia: 'Frontend Avanzado', curso_id: 3 },
];

const materiasPorEstudiantes = [
  { materia_id: 1, alumno_id: 1 },
  { materia_id: 2, alumno_id: 1 },
  { materia_id: 3, alumno_id: 2 },
  { materia_id: 4, alumno_id: 2 },
  { materia_id: 5, alumno_id: 3 },
  { materia_id: 6, alumno_id: 3 },
];

const seedDatabase = async () => {
  try {
    // Prueba la conexión a la base de datos
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida.');

    // Sincroniza los modelos (esto recreará las tablas)
    await sequelize.sync({ force: true });
    console.log('Tablas sincronizadas.');

    // Inserta datos de prueba
    await Estudiante.bulkCreate(estudiantes);
    console.log('Estudiantes creados.');

    await Curso.bulkCreate(cursos);
    console.log('Cursos creados.');

    await Materia.bulkCreate(materias);
    console.log('Materias creadas.');

    await MateriasPorEstudiante.bulkCreate(materiasPorEstudiantes);
    console.log('Relaciones entre materias y estudiantes creadas.');

    console.log('¡Base de datos inicializada con datos de prueba!');
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
  } finally {
    // Cierra la conexión a la base de datos
    await sequelize.close();
    console.log('Conexión a la base de datos cerrada.');
  }
};

seedDatabase();
