const fase3Model = require('../models/fase3.model');

class Fase3Service {
    static list(req, res) {
        fase3Model.find().then(
            (fase3) => {
                res.status(201).json(fase3);
            }
        ).catch(
            (error) => {
                res.status(500).json(error);
            }
        );
    }

    static register(req, res) { // Na requisição o front passa o null caso o campo não esteja preenchido
        fase3Model.create({
            pBaixa : req.files.pBaixa[0].path,
            pDeSituacao : req.files.pDeSituacao[0].path,
            pDeLocalizacao : req.files.pDeLocalizacao[0].path,
            pCobertura : req.files.pCobertura[0].path,

            profsEnvolvidos: req.body.profsEnvolvidos, // Na requisição, o front vai dar uma lista > mudar no model ao passar pro front <

            cLongitudinal: req.files.cLongitudinal[0].path,
            cTransversal: req.files.cTransversal[0].path,

            fachada: req.files.fachada[0].path,

            codObras: req.files.codObras[0].path,
            requerimento: req.files.requerimento[0].path,
            memorial: req.files.memorial[0].path,
            cronoExecObra: req.files.cronoExecObra[0].path,
            CNDdoINSS: req.files.CNDdoINSS[0].path,
            alvara: req.files.alvara[0].path,
            CVCO: req.files.CVCO[0].path,
            acoCRI: req.files.acoCRI[0].path,
        }).then(
            (fase3) => {
                res.status(201).json(fase3);
            }
        ).catch(
            (err)=>{
                res.status(500).json(err);
                console.log("Meu " + err);
            }
        )
    }

    static update(req, res) {
        fase3Model.findByIdAndUpdate(req.params.id, req.body, { 'new': true }).then(
            (fase3) => {
                res.status(201).json(fase3);
            }
        );
    }

    static delete(req, res) {
        fase3Model.findByIdAndRemove(req.params.id).then(
            (fase3) => {
                res.status(201).json(fase3);
            }
        );
    }

    static retrieve(req, res) {
        fase3Model.findById(req.params.id).then(
            (fase3) => {
                res.status(201).json(fase3);
            }
        );
    }
}

module.exports = Fase3Service;