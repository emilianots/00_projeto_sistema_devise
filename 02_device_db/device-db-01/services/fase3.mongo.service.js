const fase3Model = require('../models/fase3.model');

class Fase3Service {
    static register(req, res) {
        fase3Model.create(req.body).then(
            (fase3) => {
                res.status(201).json(fase3);
            }
        ).catch(
            (err) => {
                res.status(500).json(err);
                console.log(err);
            }
        )
    }

    static list(req, res) {
        fase3Model.find().then(
            (fases) => {
                res.status(201).json(fases);
            }
        ).catch((err) => {
            res.status(500).json(err);
            console.log(err);
        })
    }

    static update(req, res) {
        fase3Model.findByIdAndUpdate(req.params.id, req.body, { 'new': true }).then(
            (fase3) => {
                res.status(201).json(fase3);
            }
        ).catch((err) => {
            res.status(500).json(err);
            console.log(err);
        })
    }

    //retorna o fase1 deletado
    static delete(req, res) {
        fase3Model.findByIdAndRemove(req.params.id).then(
            (fase3) => {
                res.status(201).json(fase3);
            }
        ).catch((err) => {
            res.status(500).json(err);
            console.log(err);
        })
    }

    //retorna um fase1
    static retrieve(req, res) {
        fase3Model.findById(req.params.id).then(
            (fase3) => {
                res.status(201).json(fase3);
            }
        ).catch((err) => {
            res.status(500).json(err);
            console.log(err);
        })
    }
}

module.exports = Fase3Service