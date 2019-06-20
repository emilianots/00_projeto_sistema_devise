const fase2Model = require('../models/fase2.model');

class Fase2Service {
    static list(req, res) {
        fase2Model.find().then(
            (fase2) => {
                res.status(201).json(fase2);
            }
        ).catch(
            (error) => {
                res.status(500).json(error);
            }
        );
    }

    static register(req, res) {
        fase2Model.create(req.body).then(
            (fase2) => {
                res.status(201).json(fase2);
            }
        ).catch(
            (err)=>{
                res.status(500).json(err);
                console.log("Meu " + err);
            }
        )
    }

    static update(req, res) {
        fase2Model.findByIdAndUpdate(req.params.id, req.body, { 'new': true }).then(
            (fase2) => {
                res.status(201).json(fase2);
            }
        );
    }

    //retorna o fase2 deletado
    static delete(req, res) {
        fase2Model.findByIdAndRemove(req.params.id).then(
            (fase2) => {
                res.status(201).json(fase2);
            }
        );
    }

    //retorna um fase2
    static retrieve(req, res) {
        fase2Model.findById(req.params.id).then(
            (fase2) => {
                res.status(201).json(fase2);
            }
        );
    }
}

module.exports = Fase2Service;