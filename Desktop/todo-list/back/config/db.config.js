const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Conexión establecida con la base de datos');
})
.catch(err => {
  console.error('Error al conectar con la base de datos:', err);
});

module.exports = mongoose;
