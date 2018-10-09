const express = require('express');
const db = require('sqlite');
const bodyParser = require('body-parser');
const app = express();
const Sequelize = require('sequelize');
const restaurants = require('./controller/restaurants');
const employees = require('./controller/employees');
const menu = require('./controller/menu');

db.open('api.db').then( () => {
    Promise.all([
        db.run('CREATE TABLE IF NOT EXISTS restaurants (address, name, capacity, timestamp)'),
        db.run('CREATE TABLE IF NOT EXISTS employees (name, restaurantId, position)'),
        db.run('CREATE TABLE IF NOT EXISTS menu (name, restaurantId)')
    ]).then( () => console.log('Db ready')).catch( err => console.error('Erreur', err));
});

const sequelize = new Sequelize('mainDb', null, null, {
    dialect: 'sqlite',
    operatorsAliases: false,
    storage: './api.db'
});

const Restaurant = sequelize.import(__dirname + "/models/Restaurants");
const Employee = sequelize.import(__dirname + '/models/Employees');
const Menu = sequelize.import(__dirname + '/models/Menu');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// app.use('/restaurants', restaurants);
// app.use('/employees', employees);
// app.use('/menu', menu);

app.listen(8080);