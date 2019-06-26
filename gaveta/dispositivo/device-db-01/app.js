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
var fase1 = require('./routes/fase1.routes.mongo');
var fase2 = require('./routes/fase2.routes.mongo');
var fase3 = require('./routes/fase3.routes.mongo');
var fase4 = require('./routes/fase4.routes.mongo');
// Adicionado
var chat = require('./routes/chat.routes.mongo');

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
app.use('/fase1', fase1);
app.use('/fase2', fase2);
app.use('/fase3', fase3);
app.use('/fase4', fase4);
// Adicionado
app.use('/chat', chat);

module.exports = app;
