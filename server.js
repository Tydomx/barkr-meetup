// importing sequelize, express, and the routes
const path = require('path');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
//importing handlebars
const exphbs = require('express-handlebars');


const app = express();
// just in case we can't use a static PORT
const PORT = process.env.PORT || 3001;

//continuation of handlebars set-up
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// turning on routes
app.use(routes);

// turn on connection to db and server
// true to reset
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});