const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  tarea: {
    type: String,
    required: true
  },
  creadoEn: {
    type: Date,
    default: Date.now
  },
  estado: {
    type: String,
    enum: ['no hecho', 'en curso', 'bloqueado', 'hecho'],
    default: 'no hecho'
  }
});

const ToDo = mongoose.model('ToDo', todoSchema);

module.exports = ToDo;
