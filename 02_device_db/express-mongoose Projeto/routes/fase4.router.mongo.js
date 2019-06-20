const express = require('express');
const router = express.Router();
const multer = require('multer');
const fase4Service = require('../services/fase4.services.mongo');

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});

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

router.post('/register', upload.single('projExecutivo'), (req, res) => {
    res.json(req.file);
    fase4Service.register(req,res);
});

router.put('/update/:id', function (req, res) {
    fase4Service.update(req, res);
});

router.delete('/delete/:id', function (req, res) {
    fase4Service.delete(req, res);
});

router.get('/retrieve/:id', function (req, res) {
    fase4Service.retrieve(req, res);
});

router.get('/list', function (req, res) {
    fase4Service.list(req, res);
});

module.exports = router;