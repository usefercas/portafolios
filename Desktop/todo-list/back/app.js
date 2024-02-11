const express = require('express');
const createError = require('http-errors');
const mongoose = require('./config/db.config'); // Importa el archivo de configuración de la base de datos

const app = express();
const port = 3000;

app.use(express.json());

// Importa las rutas de la API
const todoRoutes = require('./routes'); // Actualiza la ruta de importación

// Usa las rutas de la API
app.use('/api', todoRoutes);

// Middleware para manejar errores 404 (No encontrado)
app.use((req, res, next) => {
  next(createError(404, 'Not found'));
});

// Middleware para manejar errores generales
app.use((err, req, res, next) => {
  console.error(err); // Agrega esta línea para ver el error en la consola
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
