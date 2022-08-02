const express = require('express');
const router = express.Router();

// ruta para el index

router.get('/', (req, res) =>
{
    res.render('index');
})
const docenteController = require('../controllers/docenteController');
//listar
router.get('/docente', docenteController.listar);
//registrar
router.post('/insertarDoc',docenteController.insertar);
//ediatr
router.post('/editarDoc',docenteController.editar);
//eliminar 
router.get('/eliminarDoc/:id', docenteController.eliminar);
module.exports = router;