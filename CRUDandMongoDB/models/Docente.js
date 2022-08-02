const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const docenteSchema=new Schema({
    IdDocente:String,
    Nombres:String,
    Apellidos:String,
    Correo:String,
    Telefono:String
},{versionKey:false});
module.exports=mongoose.model('docentes',docenteSchema);