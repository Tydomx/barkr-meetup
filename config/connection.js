// import Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3001
});

module.exports = sequelize;
