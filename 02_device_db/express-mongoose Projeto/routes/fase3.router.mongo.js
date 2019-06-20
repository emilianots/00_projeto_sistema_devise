const express = require('express');
const router = express.Router();
const multer = require('multer');
const fase3Service = require('../services/fase3.services.mongo');

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});


// Filtro dos Arquivos, permitindo somente os que decidimos
const fileFilter = (req, file, cb) => {
    if(file.mimetype == 'image/jpeg' ||
    file.mimetype == 'image/png' || file.mimetype == 'application/pdf'){
        cb(null, true);
    } else{
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 1000 // Tamanho de Arquivo permitido 1000mb
    },
    fileFilter: fileFilter
}).fields([
    // Plantas
    { name : "pBaixa" },
    { name : "pDeSituacao" },
    { name : "pDeLocalizacao" },
    { name : "pCobertura" },

    // Cortes
    { name : "cLongitudinal" },
    { name : "cTransversal" },

    // Fachada
    { name : "fachada" },

    // Projeto Legal
    { name : "codObras" },
    { name : "requerimento" },
    { name : "memorial" },
    { name : "cronoExecObra" },
    { name : "CNDdoINSS" },
    { name : "alvara" },
    { name : "CVCO" },
    { name : "acoCRI" }
]);

router.post('/register', (req, res) => {
    upload(req, res, (err) =>{
        if(err){
            console.log(err);
        } else{ // O tratamento das variáveis devem ser após o else
            // res.json(req.files);
            fase3Service.register(req,res);
        }
    });
});

router.put('/update/:id', function (req, res) {
    fase3Service.update(req, res);
});

router.delete('/delete/:id', function (req, res) {
    fase3Service.delete(req, res);
});

router.get('/retrieve/:id', function (req, res) {
    fase3Service.retrieve(req, res);
});

router.get('/list', function (req, res) {
    fase3Service.list(req, res);
});

module.exports = router;