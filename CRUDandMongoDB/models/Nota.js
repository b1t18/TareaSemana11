const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const notaSchema= new Schema(
{
        IdAlumno:String,
        IdCurso:String,
        IdAula:String,
        IdDocente:String,
        Practicas:String,
        Parcial:String,
        Final:String      
},{versionKey:false});

module.exports=mongoose.model('nota',notaSchema);