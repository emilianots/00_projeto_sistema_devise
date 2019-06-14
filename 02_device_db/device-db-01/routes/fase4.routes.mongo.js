var fase4Service = require('../services/fase4.mongo.service');
var express = require('express');
var router = express.Router();

router.get('/list', function (req, res, next) {
    fase4Service.list(req, res);
});

router.post('/register', function (req, res, next) {
    fase4Service.register(req, res);
});

router.put('/update/:id', function (req, res, next) {
    fase4Service.update(req, res);
});

router.delete('/delete/:id', function (req, res, next) {
    fase4Service.delete(req, res);
});

router.get('/retrieve/:id', function (req, res, next) {
    fase4Service.retrieve(req, res);
});
module.exports = router;