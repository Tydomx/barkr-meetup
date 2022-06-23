// importing sequelize, express, and the routes
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
// just in case we can't use a static PORT
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turning on routes
app.use(routes);

// turn on connection to db and server
// true to reset
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});