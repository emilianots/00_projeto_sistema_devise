const ProfissionalModel = require('../models/profissional.model');
var bcrypt = require('bcrypt');

class ProfissionalService {
    static register(req, res) {
        let _profissional = req.body;
        _profissional.senha = bcrypt.hashSync(req.body.senha, 10);
        ProfissionalModel.create(_profissional).then(
            (ent) => {
                res.status(201).json(ent);
            }
        ).catch((err) => { res.status(500).json(err) })
    }

    static list(req, res) {
        ProfissionalModel.find().populate('projetos').then(
            (profissionais) => {
                res.status(201).json(profissionais);
            }
        ).catch((err) => { res.status(500).json(err) })
    }

    static update(req, res) {
        ProfissionalModel.findOneAndUpdate({ 'email': req.params.email }, req.body, { 'new': true }).then(
            (profissional) => {
                res.status(201).json(profissional);
            }
        ).catch((err) => { res.status(500).json(err) })
    }

    static delete(req, res) {
        ProfissionalModel.findOneAndDelete({ 'email': req.params.email }).then(
            (profissional) => {
                res.status(201).json(profissional);
            }
        ).catch((err) => { res.status(500).json(err) })
    }

    static retrieveBiId(req, res) {
        ProfissionalModel.findById(req.params.id, req.body).then(
            (profissional) => {
                if (!bcrypt.compareSync(req.body.senha, profissional.senha)) {
                    res.status(401).json('Senha inválida');
                }
                res.status(201).json(profissional);
            }
        ).catch((err) => { res.status(500).json(err) })
    }

    static retrieveByEmail(req, res) {
        ProfissionalModel.findOne({ 'email': req.params.email }).then(
            (profissional) => {
                if (!bcrypt.compareSync(req.params.senha, profissional.senha)) {
                    res.status(401).json('Senha inválida!');
                }
                res.status(201).json(profissional);
            }
        ).catch((err) => { res.status(500).json(err) })
    }

    static addProjeto(req, res) {
        ProfissionalModel.findOneAndUpdate({ '_id': req.params.id }, { $push: { 'projetos': req.body.id }}, {'new': true}).then(
            (profissional)=>{
                res.status(201).json(profissional);
            }
        )
    }
}

module.exports = ProfissionalService;