const Fase1Model = require("../models/fase1.model");

class Fase1Service {
    static register(req, res) {
        Fase1Model.create(req.body).then(
            (fase) => {
                res.status(201).json(fase);
            }
        )
    }

    static list(req, res) {
        Fase1Model.find().then(
            (fases) => {
                res.status(201).json(fases);
            }
        )
    }

    static update(req, res) {
        Fase1Model.findOneAndUpdate({ '_id': req.params._id }, req.body, { 'new': true }).then(
            (fase) => {
                res, status(201).json(fase)
            }
        )
    }

    static delete(req, res) {
        Fase1Model.findOneAndDelete({ '_id': req.params._id }).catch((err) => { res.status(500).json(err) })
    }

    static retrieve(req, res){
        Fase1Model.findById(req.body._id).then(
            (fase)=>{
                res.status(201).json(fase);
            }
        )
    }
}

module.exports = Fase1Service;