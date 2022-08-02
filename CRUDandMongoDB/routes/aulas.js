const express= require("express");
const router = express.Router();

//ruta para el index 
router.get('/',(req,res)=>{
    res.render('index')
});

const aulaController = require('../controllers/aulaController');

//ruta para listar aulas
router.get('/aula',aulaController.listar);

//ruta para registrar aulas
router.post('/insertar',aulaController.insertar);

//ruta para actualizar aula
router.post('/editar',aulaController.editar);

//ruta para eliminar aula
router.get('/eliminar/:id', aulaController.eliminar);

module.exports = router;