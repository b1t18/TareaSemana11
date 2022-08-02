const Alumno = require('../models/Alumno');
//listar
module.exports.listar = (req, res) => {
    Alumno.find({}, (error, alumnos) => {
        if (error) {
            return res.status(500).json({
                message: 'Error de esquema de datos'
            })
        }
        console.log(alumnos)
        return res.render('alumno', { alumnos: alumnos })
    })
}
//metodo para registrar datos del aula
module.exports.insertar = (req, res) =>
{
    const alumno = new Alumno ({
        IdAlumno: req.body.cod,
        Nombres: req.body.nom,
        Apellidos: req.body.ape,
        Correo: req.body.cor,
        Telefono: req.body.tel,
    })
    alumno.save(function(error, aula)
    {
        if(error)
        {
            return res.status(500).json({
                message: 'Error al insertar'
            })   
        }
        res.redirect('/alumno')
    })
    
}
//editar
module.exports.editar = (req,res) => {
    const id = req.body.e_id;
    const IdAlumno = req.body.e_cod;
    const Nombres = req.body.e_nom;
    const Apellidos = req.body.e_ape;
    const Correo = req.body.e_cor;
    const Telefono = req.body.e_tel;
    
    Alumno.findByIdAndUpdate(id, {IdAlumno, Nombres, Apellidos,Correo,Telefono}, (error,alumno) => {
        if (error)
        {
            return res.status(500).json({
                message: 'Error al actualizar'
            })
        }
        res.redirect('/alumno')
    })
}
module.exports.eliminar = (req,res) => {
    const id = req.params.id
    Alumno.findByIdAndRemove(id,(error,aula) => {
        if(error){
            return res.status(500).json({
                message: 'Error al eliminar'
            })
        }
        res.redirect('/alumno')
    })
}

