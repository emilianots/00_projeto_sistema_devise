var express = require('express');
var router = express.Router();
var userService = require('../services/user.services.mongo');

router.get('/list', (req, res) => {
  userService.list(req,res);
});

router.post('/register', (req, res) => {
  userService.register(req,res);
});

router.put('/update/:id', function(req, res){
  userService.update(req,res);  
  // const user = userService.update(req.params.id, req.body);
  // return res.json(user);
});

router.delete('/delete/:id', function(req, res){
  userService.delete(req,res);
});

router.get('/retrieve/:id', function(req, res){
  userService.retrieve(req,res);
});

router.get('/retrieve/login/:login', function(req, res){
  userService.retrieveByLogin(req,res);
});

module.exports = router;