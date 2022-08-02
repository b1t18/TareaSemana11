const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AulaSchema = new Schema({
    IdAula: String, 
    Aula: String,
    Aforo: String,
},{versionKey:false});

module.exports = mongoose.model('Aulas',AulaSchema);