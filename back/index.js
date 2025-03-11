const express = require('express');
const sequelize = require('./config/database'); // Configuración de la base de datos
const clienteRoutes = require('./routes/clienteRoutes'); // Rutas para clientes
const productoRoutes = require('./routes/productoRoutes'); // Rutas para productos
const transaccionRoutes = require('./routes/transaccionRoutes'); // Rutas para transacciones

const app = express();
app.use(express.json()); // Para poder trabajar con JSON en las solicitudes

// Aquí se definen las rutas
app.use('/clientes', clienteRoutes);
app.use('/productos', productoRoutes);
app.use('/transacciones', transaccionRoutes);

// Sincronizamos la base de datos
sequelize.sync()
  .then(() => console.log('Base de datos sincronizada'))
  .catch(err => console.log('Error al sincronizar la base de datos:', err));

// Iniciamos el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('API en funcionamiento en el puerto 3000');
});
