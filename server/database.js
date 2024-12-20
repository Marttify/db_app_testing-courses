import { Sequelize, DataTypes } from 'sequelize';

export const sequelize = new Sequelize({
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logQueryParameters: true,
});


export const Estudiante = sequelize.define('Estudiante', {
  nombre: { type: DataTypes.STRING, allowNull: false },
  apellido: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
});


export const Curso = sequelize.define('Curso', {
  nombre_curso: { type: DataTypes.STRING, allowNull: false },
  nivel: { type: DataTypes.STRING, allowNull: false },
});


export const Materia = sequelize.define('Materia', {
  nombre_materia: { type: DataTypes.STRING, allowNull: false },
});


export const MateriasPorEstudiante = sequelize.define('MateriasPorEstudiante', {});

// Definición de relaciones
Curso.hasMany(Materia, { foreignKey: 'curso_id' });
Materia.belongsTo(Curso, { foreignKey: 'curso_id' });

Estudiante.belongsToMany(Materia, {
  through: MateriasPorEstudiante,
  foreignKey: 'alumno_id',
});
Materia.belongsToMany(Estudiante, {
  through: MateriasPorEstudiante,
  foreignKey: 'materia_id',
});