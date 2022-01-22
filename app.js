const mysql = require('mysql2');
const inquirer = require('inquirer');
const session = require('express-session');
const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize');

var imageRouter = require('./routes/image-route');
app.use('/', imageRouter);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});