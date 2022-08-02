const express = require('express');
const router = express.Router();

// ruta para el index

router.get('/', (req, res) =>
{
    res.render('index');
})
const cursoController = require('../controllers/cursosController');
//listar
router.get('/curso', cursoController.listar);
//registrar
router.post('/insertarCurso',cursoController.insertar);
//ediatr
router.post('/editarCurso',cursoController.editar);
//eliminar 
router.get('/eliminarCurso/:id', cursoController.eliminar);
module.exports = router;