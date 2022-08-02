const Docente = require("../models/Docente");

//listar
module.exports.listar=(req,res)=>{
    Docente.find({},(error,docentes)=>{
        if (error){
            return res.status(500).json({
                message:"Error de esquema de datos"
            })
        }
        console.log(docentes)
        return res.render("docente",{docentes:docentes})
    })
}

//metodo para registrar datos del docente
module.exports.insertar = (req, res) =>
{
    const docente = new Docente ({
        IdDocente: req.body.cod,
        Nombres: req.body.nom,
        Apellidos: req.body.ape,
        Correo: req.body.cor,
        Telefono: req.body.tel,
    })
    docente.save(function(error, docente)
    {
        if(error)
        {
            return res.status(500).json({
                message: 'Error al insertar'
            })   
        }
        res.redirect('/docente')
    })
    
}

//editar
module.exports.editar=(req,res)=>{
    const id=req.body.e_id;
    const IdDocente=req.body.e_cod;
    const Nombres = req.body.e_nom;
    const Apellidos = req.body.e_ape;
    const Correo = req.body.e_cor;
    const Telefono = req.body.e_tel;

    Docente.findByIdAndUpdate(id,{IdDocente, Nombres, Apellidos,Correo,Telefono},(error,docente)=>{
        if(error){
            return res.status(500).json({
                message:"Error al actualizar"
            })
        }
        res.redirect("/docente")
    })
}

module.exports.eliminar=(req,res)=>{
    const id=req.params.id
    Docente.findByIdAndRemove(id,(error,docente)=>{
        if(error){
            return res.status(500).json({
                message:"Error al eliminar"
            })
        }
        res.redirect("/docente")
    })
}