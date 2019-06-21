const ProfissionalModel = require('../models/profissional.model');
var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}


class ProfissionalService {
    static register(req, res) {
        let _profissional = req.body;
        _profissional.senha = bcrypt.hashSync(req.body.senha, 10);
        ProfissionalModel.create(_profissional).then(
            (ent) => {
                res.status(201).json(ent);
            }
        ).catch((err) => {
            res.status(500).json(err)
            console.log(err);
        })
    }

    static list(req, res) {
        ProfissionalModel.find().populate('projetos').then(
            (profissionais) => {
                res.status(201).json(profissionais);
            }
        ).catch((err) => {
            res.status(500).json(err);
            console.log(err);
        })
    }

    static update(req, res) {
        ProfissionalModel.findOneAndUpdate({ 'email': req.params.email }, req.body, { 'new': true }).then(
            (profissional) => {
                res.status(201).json(profissional);
            }
        ).catch((err) => {
            res.status(500).json(err)
            console.log(err);
        })
    }

    static delete(req, res) {
        ProfissionalModel.findOneAndDelete({ 'email': req.params.email }).then(
            (profissional) => {
                res.status(201).json(profissional);
            }
        ).catch((err) => {
            res.status(500).json(err)
            console.log(err);
        })
    }

    static retrieveBiId(req, res) {
        ProfissionalModel.findById({ '_id': req.params.id }, req.body).then(
            (profissional) => {
                res.status(201).json(profissional);
            }
        ).catch((err) => {
            res.status(500).json(err)
            console.log(err);
        })
    }

    static retrieveByEmail(req, res) {
        ProfissionalModel.findOne({ 'email': req.params.email }).populate('projetos').then(
            (profissional) => {
                if (!profissional) {
                    return res.status(400).json({ error: "Usuario inválido" })
                }

                if (!bcrypt.compareSync(req.params.senha, profissional.senha)) {
                    res.status(401).json({ erro: 'Senha inválida!' });
                    return
                }

                profissional.senha = null;

                res.status(201).json({
                    profissional,
                    token: generateToken({_id: profissional._id})
                });
            }
        ).catch((err) => {
            res.status(500).json(err)
            console.log(err);
            return;
        })
    }

    static addProjeto(req, res) {
        ProfissionalModel.findOneAndUpdate({ '_id': req.params.id }, { $push: { 'projetos': req.body._id } }, { 'new': true }).then(
            (profissional) => {
                res.status(201).json(profissional);
            }
        )
    }
}

module.exports = ProfissionalService;