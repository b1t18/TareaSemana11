const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const alumnoSchema= new Schema({
        idAula:String,
        Aula:String,
        Aforo:String      
},{versionKey:false});
module.exports=mongoose.model('alumno',alumnoSchema);