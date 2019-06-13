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
module.exports = router;