const Nota = require("../models/Nota");

module.exports.listar = (req, res) =>
{
    Nota.find({}, (error, resultnotas) =>
    {
        if (error)
        {
            return res.status(500).json
            ({
                message: 'Error esquema de datos'
            })
        }
        //console.log(resultnotas)
        return res.render('nota', {notas:resultnotas});

    })
}

module.exports.guardar = (req, res) =>
{
    const notas = new Nota ({
        IdAlumno: req.body.idAlu,
        IdCurso: req.body.idCur,
        IdAula: req.body.idAul,
        IdDocente: req.body.idDoc,
        Practicas: req.body.pra,
        Parcial: req.body.par,
        Final: req.body.fin      
    })
    console.log(notas)
    console.log(req.body.idAlu)

    notas.save(function (error, nota)
    {
        if (error)
        {
            return res.status(500).json({
                message: 'Error al insertar'
            })
        }
        console.log(nota)
        res.redirect('/nota')
    })
}

module.exports.actualizar = (req, res) =>
{
    const id = req.body.e_id;
    const IdAlumno = req.body.e_idAlu;
    const IdCurso = req.body.e_idCur;
    const IdAula = req.body.e_idAul;
    const IdDocente = req.body.e_idDoc;
    const Practicas = req.body.e_pra;
    const Parcial = req.body.e_par;
    const Final = req.body.e_fin;
    Nota.findByIdAndUpdate(id, {IdAlumno, IdCurso, IdAula, IdDocente, Practicas, Parcial, Final}, (error,aula) => 
    {
        if (error)
        {
            return res.status(500).json({
                message: 'Error al actualizar'
            })
        }
        res.redirect('/nota')
    })
}

module.exports.eliminar = (req, res) =>
{
    Nota.findByIdAndRemove(req.params.id, (error, nota) =>
    {
        if (error)
        {
            return res.status(500).json({
                message: 'Error al eliminar'
            })
        }
        res.redirect('/nota')
    })
}
