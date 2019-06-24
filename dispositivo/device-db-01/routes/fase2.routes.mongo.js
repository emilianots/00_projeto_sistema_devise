var express = require('express');
var router = express.Router();
var fase2Service = require('../services/fase2.mongo.service');

router.get('/list', function (req, res, next) {
    fase2Service.list(req, res);
});

router.post('/register', function (req, res, next) {
    fase2Service.register(req, res);
});

router.put('/update/:id', function (req, res, next) {
    fase2Service.update(req, res);
});

router.delete('/delete/:id', function (req, res, next) {
    fase2Service.delete(req, res);
});

router.get('/retrieve/:id', function (req, res, next) {
    fase2Service.retrieve(req, res);
});
module.exports = router;