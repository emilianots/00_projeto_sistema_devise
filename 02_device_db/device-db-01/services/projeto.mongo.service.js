const ProjetoModel = require("../models/projeto.model");

class ProjetoService {
    static register(req, res) {
        ProjetoModel.create(req.body).then(
            (projeto) => {
                res.status(201).json(projeto);
            }
        ).catch((err) => { res.status(500).json(err) })
    }

    static list(req, res) {
        ProjetoModel.find().then(
            (projetos) => {
                res.status(201).json(projetos);
            }
        ).catch((err) => { res.status(500).json(err) })
    }

    static update(req, res) {
        ProjetoModel.findOneAndUpdate({ '_id': req.params._id }, req.body, { 'new': true }).then(
            (projeto) => {
                res, status(201).json(projeto)
            }
        ).catch((err) => { res.status(500).json(err) })
    }

    static delete(req, res) {
        ProjetoModel.findOneAndDelete({ '_id': req.params._id }).catch((err) => { res.status(500).json(err) })
    }

    static retrieve(req, res){
        ProjetoModel.findById(req.body._id).then(
            (projeto)=>{
                res.status(201).json(projeto);
            }
        )
    }

}

module.exports = ProjetoService;