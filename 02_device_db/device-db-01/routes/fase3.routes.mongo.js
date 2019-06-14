var fase3Service = require('../services/fase3.mongo.service');
var express = require('express');
var router = express.Router();

router.get('/list', function (req, res, next) {
    fase3Service.list(req, res);
});

router.post('/register', function (req, res, next) {
    fase3Service.register(req, res);
});

router.put('/update/:id', function (req, res, next) {
    fase3Service.update(req, res);
});

router.delete('/delete/:id', function (req, res, next) {
    fase3Service.delete(req, res);
});

router.get('/retrieve/:id', function (req, res, next) {
    fase3Service.retrieve(req, res);
});
module.exports = router;