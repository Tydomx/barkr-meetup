// importing sequelize, express, and the routes
const path = require('path');
const express = require('express');
const routes = require('./controllers/');
//importing handlebars
const exphbs = require('express-handlebars');


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

app.use(session(sess));

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