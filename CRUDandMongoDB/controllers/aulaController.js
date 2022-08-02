const { json } = require('express');
const Aula = require('../model/Aula');

//metodo para listar datos del aula
module.exports.listar = (req,res) =>
{
    Aula.find({},(error,aulas) =>
    {
        if (error)
        {
            return res.status(500).json({
                message: 'Error de esquema de datos'
            })
        }
        return res.render('aula', {aulas:aulas})
    })
}

//metodo para registrar datos del aula
module.exports.insertar = (req, res) =>
{
    const aula = new Aula ({
        idaula: req.body.aul,
        aula: req.body.nom,
        aforo: req.body.afor,
    })
    aula.save(function(error, aula)
    {
        if(error)
        {
            return res.status(500).json({
                message: 'Error al insertar'
            })   
        }
        res.redirect('/aula')
    })
    
}

//metodo para editar datos del aula
module.exports.editar = (req,res) => {
    const id = req.body.e_id;
    const idaula = req.body.e_aul;
    const aula = req.body.e_nom;
    const aforo = req.body.e_afor;
    
    Aula.findByIdAndUpdate(id, {idaula, aula, aforo}, (error,aula) => {
        if (error)
        {
            return res.status(500).json({
                message: 'Error al actualizar'
            })
        }
        res.redirect('/aula')
    })
}

//método para eliminar datos del aula
module.exports.eliminar = (req,res) => {
    const id = req.params.id
    Aula.findByIdAndRemove(id,(error,aula) => {
        if(error){
            return res.status(500).json({
                message: 'Error al eliminar'
            })
        }
        res.redirect('/aula')
    })
}