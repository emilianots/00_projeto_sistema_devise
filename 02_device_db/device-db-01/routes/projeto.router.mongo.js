var projetoService = require('../services/projeto.mongo.service');
var express = require('express');
var router = express.Router();

router.get('/list', function (req, res, next) {
    projetoService.list(req, res);
});

router.post('/register', function (req, res, next) {
    projetoService.register(req, res);
});

router.put('/update/:id', function (req, res, next) {
    projetoService.update(req, res);
});

router.delete('/delete/:id', function (req, res, next) {
    projetoService.delete(req, res);
});

router.get('/retrieve/:id', function (req, res, next) {
    projetoService.retrieve(req, res);
});

router.put('/novaFase/1/:id', function (req, res, next) {
    projetoService.addFase1(req, res);
});

router.put('/novaFase/2/:id', function (req, res, next) {
    projetoService.addFase2(req, res);
});

router.put('/novaFase/3/:id', function (req, res, next) {
    projetoService.addFase3(req, res);
});

router.put('/novaFase/4/:id', function (req, res, next) {
    projetoService.addFase4(req, res);
});


module.exports = router;