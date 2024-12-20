import express from 'express';
import { Estudiante, Curso, Materia, MateriasPorEstudiante } from './database.js';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas principales
app.get('/', (req, res) => {
  res.send('Hello, teacher!');
});

// Endpoints para Estudiantes
app.get('/estudiantes', async (req, res) => {
  const estudiantes = await Estudiante.findAll();
  res.json(estudiantes);
});

// app.post('/estudiantes', async (req, res) => {
//   const estudiante = await Estudiante.create(req.body);
//   res.json(estudiante);
// });

app.put('/estudiantes/:id', async (req, res) => {
  const estudiante = await Estudiante.findByPk(req.params.id);
  if (estudiante) {
    await estudiante.update(req.body);
    res.json(estudiante);
  } else {
    res.status(404).send('Estudiante no encontrado');
  }
});

app.delete('/estudiantes/:id', async (req, res) => {
  const estudiante = await Estudiante.findByPk(req.params.id);
  if (estudiante) {
    await estudiante.destroy();
    res.sendStatus(204);
  } else {
    res.status(404).send('Estudiante no encontrado');
  }
});

// Endpoints para Cursos
app.get('/cursos', async (req, res) => {
  const cursos = await Curso.findAll();
  res.json(cursos);
});

app.post('/cursos', async (req, res) => {
  const curso = await Curso.create(req.body);
  res.json(curso);
});

app.put('/cursos/:id', async (req, res) => {
  const curso = await Curso.findByPk(req.params.id);
  if (curso) {
    await curso.update(req.body);
    res.json(curso);
  } else {
    res.status(404).send('Curso no encontrado');
  }
});

app.delete('/cursos/:id', async (req, res) => {
  const curso = await Curso.findByPk(req.params.id);
  if (curso) {
    await curso.destroy();
    res.sendStatus(204);
  } else {
    res.status(404).send('Curso no encontrado');
  }
});

// Endpoints para Materias
app.get('/materias', async (req, res) => {
  const materias = await Materia.findAll();
  res.json(materias);
});

app.post('/materias', async (req, res) => {
  const materia = await Materia.create(req.body);
  res.json(materia);
});

app.put('/materias/:id', async (req, res) => {
  const materia = await Materia.findByPk(req.params.id);
  if (materia) {
    await materia.update(req.body);
    res.json(materia);
  } else {
    res.status(404).send('Materia no encontrada');
  }
});

app.delete('/materias/:id', async (req, res) => {
  const materia = await Materia.findByPk(req.params.id);
  if (materia) {
    await materia.destroy();
    res.sendStatus(204);
  } else {
    res.status(404).send('Materia no encontrada');
  }
});

// Endpoints para MateriasPorEstudiante
app.get('/materias-por-estudiante', async (req, res) => {
  const materiasPorEstudiante = await MateriasPorEstudiante.findAll();
  res.json(materiasPorEstudiante);
});

app.post('/materias-por-estudiante', async (req, res) => {
  const relacion = await MateriasPorEstudiante.create(req.body);
  res.json(relacion);
});

app.delete('/materias-por-estudiante/:id', async (req, res) => {
  const relacion = await MateriasPorEstudiante.findByPk(req.params.id);
  if (relacion) {
    await relacion.destroy();
    res.sendStatus(204);
  } else {
    res.status(404).send('Relación no encontrada');
  }
});

// Inicialización del servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
