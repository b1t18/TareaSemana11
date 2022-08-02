const modelCurso = require('../models/Curso');
//listar
module.exports.listar = (req, res) => {
    modelCurso.find({}, (error, cursos) => {
        if (error) {
            return res.status(500).json({
                message: 'Error de esquema de datos'
            })
        }
        console.log(cursos)
        return res.render('cursos', { cursos: cursos })
    })
}
//metodo para registrar datos del aula
module.exports.insertar = (req, res) =>
{
    const curso = new modelCurso ({
        IdCurso: req.body.codigo,
        Curso: req.body.curso,
        Creditos: req.body.credito,
        PreRequisito: req.body.preRequisito,

    })
    curso.save(function(error, cur)
    {
        if(error)
        {
            return res.status(500).json({
                message: 'Error al insertar'
            })   
        }
        res.redirect('/curso')
    })
    
}
//editar
module.exports.editar = (req,res) => {
    const id = req.body.e_id;
    const IdCurso = req.body.e_codigo;
    const Curso = req.body.e_curso;
    const Creditos = req.body.e_credito;
    const PreRequisito = req.body.e_preRequisito;

    
    modelCurso.findByIdAndUpdate(id, {IdCurso, Curso, Creditos,PreRequisito}, (error,cur) => {
        if (error)
        {
            return res.status(500).json({
                message: 'Error al actualizar'
            })
        }
        res.redirect('/curso')
    })
}
module.exports.eliminar = (req,res) => {
    const id = req.params.id
    modelCurso.findByIdAndRemove(id,(error,cur) => {
        if(error){
            return res.status(500).json({
                message: 'Error al eliminar'
            })
        }
        res.redirect('/curso')
    })
}

