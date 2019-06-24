const fase4Model = require('../models/fase4.model');

class Fase4Service {
    static register(req, res) {
        fase4Model.create(req.body).then(
            (fase4) => {
                res.status(201).json(fase4);
            }
        ).catch(
            (err) => {
                res.status(500).json(err);
                console.log(err);
            }
        )
    }

    static list(req, res) {
        fase4Model.find().then(
            (fases) => {
                res.status(201).json(fases);
            }
        ).catch((err) => {
            res.status(500).json(err);
            console.log(err);
        })
    }

    static update(req, res) {
        fase4Model.findByIdAndUpdate(req.params.id, req.body, { 'new': true }).then(
            (fase4) => {
                res.status(201).json(fase4);
            }
        ).catch((err) => {
            res.status(500).json(err);
            console.log(err);
        })
    }

    //retorna o fase1 deletado
    static delete(req, res) {
        fase4Model.findByIdAndRemove(req.params.id).then(
            (fase4) => {
                res.status(201).json(fase4);
            }
        ).catch((err) => {
            res.status(500).json(err);
            console.log(err);
        })
    }

    //retorna um fase1
    static retrieve(req, res) {
        fase4Model.findById(req.params.id).then(
            (fase4) => {
                res.status(201).json(fase4);
            }
        ).catch((err) => {
            res.status(500).json(err);
            console.log(err);
        })
    }
}

module.exports = Fase4Service