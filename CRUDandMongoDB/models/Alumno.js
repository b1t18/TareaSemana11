const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const alumnoSchema= new Schema({
        IdAlumno:String,
        Nombres:String,
        Apellidos:String,
        Correo:String,
        Telefono:String
},{versionKey:false});
module.exports=mongoose.model('alumnos',alumnoSchema);