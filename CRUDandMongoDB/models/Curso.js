const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CursoSchema = new Schema({
    IdCurso : String,
	Curso : String,
	Creditos : String,
	PreRequisito : String
},{versionKey:false});

module.exports = mongoose.model('cursos',CursoSchema);