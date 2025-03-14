const express = require('express');
const clienteController = require('../controllers/clienteController'); // Importar el controlador de clientes

const router = express.Router();

// Definir las rutas para clientes
router.post('/', clienteController.createCliente); // Crear cliente
router.get('/', clienteController.getAllClientes); // Obtener todos los clientes
router.get('/:nombre', clienteController.getClienteByName); // Obtener cliente por nombre
router.put('/:id', clienteController.updateSaldoCliente); // Actualizar saldo del cliente
router.delete('/:id', clienteController.deleteCliente); // Eliminar cliente

module.exports = router;
