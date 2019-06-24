var express = require('express');
var router = express.Router();
var fase1Service = require('../services/fase1.mongo.service');

router.post('/register', (req, res) => {
  fase1Service.register(req, res);
});

router.get('/list', (req, res) => {
  fase1Service.list(req, res);
});

router.put('/update/:id', function (req, res) {
  fase1Service.update(req, res);
});

router.delete('/delete/:id', function (req, res) {
  fase1Service.delete(req, res);
});

router.get('/retrieve/:id', function (req, res) {
  fase1Service.retrieve(req, res);
});

module.exports = router;