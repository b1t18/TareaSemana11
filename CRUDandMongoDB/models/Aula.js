const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AulaSchema = new Schema({
    idaula: String, 
    aula: String,
    aforo: String,
},{versionKey:false});

module.exports = mongoose.model('Aulas',AulaSchema);