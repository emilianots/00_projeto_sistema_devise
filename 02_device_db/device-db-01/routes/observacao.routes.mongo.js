var express = require('express');
var router = express.Router();
var observacaoService = require('../services/observacao.mongo.service');

router.post('/post', (req, res) => {
    observacaoService.register(req, res);
})

router.get('/listAll', (req, res) => {
    observacaoService.listAll(req, res);
})

router.get('/retrieve/:id', (req, res) => {
    observacaoService.retrieveBiId(req, res);
})

router.delete('/delete/:id', (req, res) => {
    observacaoService.delete(req, res);
})


module.exports = router;