var express = require('express');
var router = express.Router();
var clienteService = require('../services/cliente.mongo.service');

router.get('/list', (req, res) => {
    clienteService.list(req, res);
})

router.post('/register', (req, res) => {
    clienteService.register(req, res);
})

router.put('/update/:email', (req, res) => {
    clienteService.update(req, res)
})

router.delete('/delete/:email', (req, res) => {
    clienteService.delete(req, res);
})

router.get('/retrieve/:id', (req, res) => {
    clienteService.retrieve(req, res);
})

router.get('/retrieve/email/:email', (req, res) => {
    clienteService.retrieveByEmail(req, res);
})

module.exports = router;