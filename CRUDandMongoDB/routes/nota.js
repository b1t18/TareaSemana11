const express= require("express");
const router = express.Router();
const notaController = require("../controllers/notaController")

router.get('/nota', notaController.listar)
router.post('/insertarnota', notaController.guardar)
router.post('/actualizarnota', notaController.actualizar)
router.get('/eliminarnota/:id', notaController.eliminar)

module.exports = router;

