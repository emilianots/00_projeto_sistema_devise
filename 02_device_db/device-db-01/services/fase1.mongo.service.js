const fase1Model = require('../models/fase1.model');

class Fase1Service {
    static register(req, res) {
        fase1Model.create(req.body).then(
            (fase1) => {
                res.status(201).json(fase1);
            }
        ).catch(
            (err) => {
                res.status(500).json(err);
                console.log("Meu " + err);
            }
        )
    }

    static list(req, res) {
        fase1Model.find().then(
            (fases) => {
                res.status(201).json(fases);
            }
        ).catch((err) => {
            res.status(500).json(err);
            console.log(err);
        })
    }

    static update(req, res) {
        fase1Model.findByIdAndUpdate(req.params.id, req.body, { 'new': true }).then(
            (fase1) => {
                res.status(201).json(fase1);
                
            }
        ).catch((err) => {
            res.status(500).json(err);
            console.log(err);
        })
    }

    //retorna o fase1 deletado
    static delete(req, res) {
        fase1Model.findByIdAndRemove(req.params.id).then(
            (fase1) => {
                res.status(201).json(fase1);
            }
        ).catch((err) => {
            res.status(500).json(err);
            console.log(err);
        })
    }

    //retorna um fase1
    static retrieve(req, res) {
        fase1Model.findById(req.params.id).then(
            (fase1) => {
                res.status(201).json(fase1);
            }
        ).catch((err) => {
            res.status(500).json(err);
            console.log(err);
        })
    }
}

module.exports = Fase1Service