// importing sequelize, express, and the routes
const path = require('path');
const express = require('express');
const routes = require('./controllers/');
//importing handlebars
const exphbs = require('express-handlebars');
//importing helpers
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

const app = express();
// just in case we can't use a static PORT
const PORT = process.env.PORT || 3001;

// importing sequelize and sessions
const sequelize = require('./config/connection');
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Secret!',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(express.urlencoded({ extended: false }));

app.use(session(sess));

app.use(express.static('public'));
app.use(express.static('images'));


app.engine('.hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

app.use(express.json());

// turning on routes
app.use(routes);

// turn on connection to db and server
// true to reset
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});