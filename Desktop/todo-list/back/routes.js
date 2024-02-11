const express = require('express');
const router = express.Router();
const toDosController = require('./controllers/toDos.controller');



// Rutas para CRUD de ToDos
router.get('/todos', toDosController.getAllToDos);
router.post('/todos', toDosController.createToDo);
router.put('/todos/:id', toDosController.updateToDo);
router.delete('/todos/:id', toDosController.deleteToDo);

module.exports = router;
