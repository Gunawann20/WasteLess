const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Food = sequelize.define('Food', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'foods',
  timestamps: false
});

module.exports = Food;
