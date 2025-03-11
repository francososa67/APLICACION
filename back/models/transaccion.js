// models/transaccion.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Definir el modelo de Transacción
const Transaccion = sequelize.define('Transaccion', {
  monto: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Transaccion;
