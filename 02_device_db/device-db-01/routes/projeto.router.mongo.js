var projetoService = require('../services/projeto.mongo.service');
var express = require('express');
var router = express.Router();

router.get("/list", (req, res)=>{
    projetoService.list()
})