const ObservacaoModel = require("../models/observacao.model");

class ObservacaoService {


    static register(req, res) {
        ObservacaoModel.create(req.body).then(

            (projeto) => {
                console.log("Adicionou\n", req.body);
                res.status(201).json(projeto);
            }

        ).catch((err) => {
            res.status(500).json(err)
            console.log('1 obs post\n', err);
        })
    }

    static listAll(req, res) {
        ObservacaoModel.find().then(
            (allObs) => {
                res.status(201).json(allObs);
            }
        ).catch((err) => {
            res.status(500).json(err);
            console.log('2 obs get all\n', err);

        })
    }

    static update(req, res) {
        ObservacaoModel.findByIdAndUpdate(req.params.id, { 'new': true }).then(
            (obs) => {
                res.status(200).json(obs)
            }
        ).catch((err) => {
            res, status(500).status(err);
            console.log('3 obs get all\n', err);
        })
    }

}

module.exports = ObservacaoService;