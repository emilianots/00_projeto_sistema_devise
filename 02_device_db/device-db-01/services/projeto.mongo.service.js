const ProjetoModel = require("../models/projeto.model");

class ProjetoService {
    static register(req, res) {
        ProjetoModel.create(req.body).then(
            (projeto) => {
                res.status(201).json(projeto);
            }
        ).catch((err) => {
            res.status(500).json(err)
            console.log(err);
        })
    }

    static list(req, res) {
        ProjetoModel.find().populate('fase1 fase2 fase3 fase4').then(
            (projetos) => {
                res.status(201).json(projetos);
            }
        ).catch((err) => { res.status(500).json(err) })
    }

    static listProjetosCli(req, res) {
        ProjetoModel.find({ "idCliente": req.params.idCliente }).populate('fase1 fase2 fase3 fase4').then(
            (projetos) => {
                res.status(201).json(projetos);
            }
        ).catch((err) => {
            res.status(500).json(err)
            console.log(err)
        })
    }

    static update(req, res) {
        ProjetoModel.findOneAndUpdate({ '_id': req.params.id }, req.body, { 'new': true }).then(
            (projeto) => {
                res.status(201).json(projeto)
            }
        ).catch((err) => {
            res.status(500).json(err)
            console.log(err)
        })
    }

   /*  static update(req, res) {
        ProjetoModel.findOneAndUpdate({ '_id': req.params.id }, req.body, { 'new': true }).then(
            (projeto) => {
                res.status(201).json(projeto)
            }
        ).catch((err) => { res.status(500).json(err) })
    } */

    static delete(req, res) {
        ProjetoModel.findOneAndDelete({ '_id': req.params.id }).catch((err) => { res.status(500).json(err) })
    }

    static retrieve(req, res) {
        ProjetoModel.findById({ "_id": req.params.id }).then(
            (projeto) => {
                res.status(201).json(projeto);
            }
        )
    }

    static addFase1(req, res) {
        ProjetoModel.findOneAndUpdate({ "_id": req.params.id }, { "$set": { "fase1": req.body._id } }, { "new": true }).then(
            (fase1) => {
                res.status(201).json(fase1);
            }
        ).catch((err) => {
            res.status(500).json(err);
            console.log(err);
        })
    }

    static addFase2(req, res) {
        ProjetoModel.findOneAndUpdate({ "_id": req.params.id }, { "$set": { "fase2": req.body._id } }, { "new": true }).then(
            (fase2) => {
                res.status(201).json(fase2);
            }
        ).catch((err) => {
            res.status(500).json(err);
            console.log(err);
        })
    }

    static addFase3(req, res) {
        ProjetoModel.findOneAndUpdate({ "_id": req.params.id }, { "$set": { "fase3": req.body._id } }, { "new": true }).then(
            (fase3) => {
                res.status(201).json(fase3);
            }
        ).catch((err) => {
            res.status(500).json(err);
            console.log(err);
        })
    }

    static addFase4(req, res) {
        ProjetoModel.findOneAndUpdate({ "_id": req.params.id }, { "$set": { "fase4": req.body._id } }, { "new": true }).then(
            (fase4) => {
                res.status(201).json(fase4);
            }
        ).catch((err) => {
            res.status(500).json(err);
            console.log(err);
        })
    }

}

module.exports = ProjetoService;