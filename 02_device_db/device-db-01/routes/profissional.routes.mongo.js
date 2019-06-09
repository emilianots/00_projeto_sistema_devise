var express = require('express');
var router = express.Router();
var profissionaService = require('../services/profissional.mongo.service');

router.get('/list', (req, res) => {
    profissionaService.list(req, res);
})

router.post('/register', (req, res) => {
    profissionaService.register(req, res);
})

router.put('/update/:email', (req, res) => {
    profissionaService.update(req, res)
})

router.delete('/delete/:email', (req, res) => {
    profissionaService.delete(req, res);
})

router.get('/retrieve/:id', (req, res) => {
    profissionaService.retrieveBiId(req, res);
})

router.get('/retrieve/email/:email/:senha', (req, res) => {
    profissionaService.retrieveByEmail(req, res);
})

router.put('/novoProjeto/:id', (req, res)=>{
    profissionaService.addProjeto(req, res);
})

module.exports = router;