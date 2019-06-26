var express = require('express');
var router = express.Router();
var chatService = require('../services/chat.mongo.service');

router.get('/list', (req, res) => {
    chatService.list(req, res);
})

router.post('/register', (req, res) => {
    chatService.register(req, res);
})

router.get('/retrieve/:id', (req, res) => {
    chatService.retrieve(req, res);
})

router.put('/update/:id', (req, res) => {
    chatService.update(req, res);
})

module.exports = router;