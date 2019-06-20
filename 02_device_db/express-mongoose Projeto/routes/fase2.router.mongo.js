const express = require('express');
const router = express.Router();
const fase2Service = require('../services/fase2.services.mongo');
const multer = require('multer');

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
});

// , upload.single('plantaTopografica') <- Acrescentar somente quando resolver como será no frontend
// pois o usuário pode ou não hospedar a planta topografica, mas após colocar na rota que um dos atributos é o upload
// não consegui requisitar sem incluir ao menos um arquivo
router.post('/register', (req, res) => {
    // res.json(req.file);
    fase2Service.register(req, res);
    // res.redirect('/');
});

router.put('/update/:id', function (req, res) {
    fase2Service.update(req, res);
});

router.delete('/delete/:id', function (req, res) {
    fase2Service.delete(req, res);
});

router.get('/retrieve/:id', function (req, res) {
    fase2Service.retrieve(req, res);
});

router.get('/list', function (req, res) {
    fase2Service.list(req, res);
});

module.exports = router;