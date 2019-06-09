var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//mongo connection
require('./db/mongo.connection');

//router
var profissionais = require('./routes/profissional.routes.mongo');
var clientes = require('./routes/cliente.routes.mongo');
var projetos = require('./routes/projeto.router.mongo');

//main
var app = express();

//configuracao
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use('/profissionais', profissionais);
app.use('/clientes', clientes);
app.use('/projetos', projetos);

module.exports = app;
