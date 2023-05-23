const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize('railway', 'root', 'Gs8VmfdCJU8x6pv24vLi', {
    host: 'containers-us-west-29.railway.app',
    port: 7818,
    dialect: 'mysql'
  });

module.exports = sequelize;
