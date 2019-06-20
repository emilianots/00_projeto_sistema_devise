const fase4Model = require('../models/fase4.model');

class Fase4Service {
    static list(req, res) {
        fase4Model.find().then(
            (fase4) => {
                res.status(201).json(fase4);
            }
        ).catch(
            (error) => {
                res.status(500).json(error);
            }
        );
    }

    static register(req, res) {
        fase4Model.create({projExecutivo: req.file.path}).then(
            (fase4) => {
                res.status(201).json(fase4);
            }
        ).catch(
            (err)=>{
                res.status(500).json(err);
                console.log("Meu " + err);
            }
        )
    }

    static update(req, res) {
        fase4Model.findByIdAndUpdate(req.params.id, req.body, { 'new': true }).then(
            (fase4) => {
                res.status(201).json(fase4);
            }
        );
    }

    static delete(req, res) {
        fase4Model.findByIdAndRemove(req.params.id).then(
            (fase4) => {
                res.status(201).json(fase4);
            }
        );
    }

    static retrieve(req, res) {
        fase4Model.findById(req.params.id).then(
            (fase4) => {
                res.status(201).json(fase4);
            }
        );
    }
}

module.exports = Fase4Service;