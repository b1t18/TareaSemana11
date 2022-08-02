const express = require('express');
const router = express.Router();

// ruta para el index

router.get('/', (req, res) =>
{
    res.render('index');
})
const alumnoController = require('../controllers/alumnoController');
//listar
router.get('/alumno', alumnoController.listar);
//registrar
router.post('/insertar',alumnoController.insertar);
//ediatr
router.post('/editar',alumnoController.editar);
//eliminar 
router.get('/eliminar/:id', alumnoController.eliminar);
module.exports = router;