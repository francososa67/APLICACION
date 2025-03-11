// models/cliente.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Definir el modelo de Cliente
const Cliente = sequelize.define('Cliente', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // El nombre debe ser único
  },
  saldo: {
    type: DataTypes.FLOAT,
    defaultValue: 0, // El saldo inicial es 0
  },
});

module.exports = Cliente;
