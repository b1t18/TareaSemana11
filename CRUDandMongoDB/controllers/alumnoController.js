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