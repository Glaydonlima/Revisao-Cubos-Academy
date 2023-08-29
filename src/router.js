const router = require("express").Router();
const filaController = require("./controladores/fila-controller");

// GET /fila -> mostra a fila de atendimento
router.get("/fila", filaController.mostrarFila);
// POST /fila -> adiciona item na fila (estudante|problema)
router.post("/fila", filaController.criarItem);
// GET /fila/:id -> mostra item da fila na posicao id-1
router.get("/fila/:id", filaController.mostrarItem);

module.exports = router;
