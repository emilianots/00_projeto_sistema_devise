var express = require('express');
var router = express.Router();
var profissionalService = require('../services/profissional.service')


router.get('/list', function(req, res){
  res.json(profissionalService.list());
})

router.post("/register", function(req, res){
  const profissional = profissionalService.register(req.body);
  return res.json(profissional);
})

module.exports = router;
