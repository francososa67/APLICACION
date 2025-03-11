const Cliente = require('../models/cliente'); // Modelo de Cliente

// Crear un nuevo cliente
exports.createCliente = async (req, res) => {
  const { nombre } = req.body;
  try {
    const cliente = await Cliente.create({ nombre });
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el cliente' });
  }
};

// Obtener todos los clientes
exports.getAllClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los clientes' });
  }
};

// Obtener un cliente por nombre
exports.getClienteByName = async (req, res) => {
  const { nombre } = req.params;
  try {
    const cliente = await Cliente.findOne({ where: { nombre } });
    if (cliente) {
      res.json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el cliente' });
  }
};

// Actualizar saldo de un cliente
exports.updateSaldoCliente = async (req, res) => {
  const { id } = req.params;
  const { monto } = req.body;
  try {
    const cliente = await Cliente.findByPk(id);
    if (cliente) {
      cliente.saldo += monto; // Modificar saldo
      await cliente.save();
      res.json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el saldo del cliente' });
  }
};

// Eliminar un cliente
exports.deleteCliente = async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await Cliente.findByPk(id);
    if (cliente) {
      await cliente.destroy();
      res.json({ message: 'Cliente eliminado correctamente' });
    } else {
      res.status(404).json({ error: 'Cliente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el cliente' });
  }
};
