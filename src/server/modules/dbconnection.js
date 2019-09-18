const Sequelize = require('sequelize');

const sequelize = new Sequelize('musicecomerce', 'root', 'jeriscool55!', {
    host: 'localhost',
    dialect: 'mysql' 
});

module.exports = sequelize;