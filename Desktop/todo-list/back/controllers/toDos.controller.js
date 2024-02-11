const ToDo = require('../models/ToDo.model');
const createError = require('http-errors');

// Función para obtener todos los ToDos
const getAllToDos = (req, res, next) => {
  ToDo.find()
    .then(todos => {
      res.json(todos);
    })
    .catch(error => {
      next(error);
    });
};

// Función para crear un nuevo ToDo
const createToDo = (req, res, next) => {
  const todo = new ToDo(req.body);
  todo.save()
    .then(savedTodo => {
      res.status(201).json(savedTodo);
    })
    .catch(error => {
      next(error);
    });
};

// Función para actualizar un ToDo existente
const updateToDo = (req, res, next) => {
  const { id } = req.params;
  ToDo.findByIdAndUpdate(id, req.body, { new: true })
    .then(updatedToDo => {
      if (!updatedToDo) {
        throw createError(404, 'ToDo not found');
      }
      res.json(updatedToDo);
    })
    .catch(error => {
      next(error);
    });
};

// Función para borrar un ToDo existente
const deleteToDo = (req, res, next) => {
  const { id } = req.params;
  ToDo.findByIdAndDelete(id)
    .then(deletedToDo => {
      if (!deletedToDo) {
        throw createError(404, 'ToDo not found');
      }
      res.sendStatus(204);
    })
    .catch(error => {
      next(error);
    });
};

module.exports = {
  getAllToDos,
  createToDo,
  updateToDo,
  deleteToDo
};
