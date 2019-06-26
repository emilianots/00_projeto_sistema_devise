const ClienteModel = require('../models/cliente.model');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}

class ClienteService{
    static register(req, res){
        ClienteModel.create(req.body).then(
            (cliente)=>{
                res.status(201).json(cliente);
            }
        )
    }

    static list(req, res){
        ClienteModel.find().exec().then(
            (cliente)=>{
                res.status(201).json(cliente);
            }
        )
    }

    static update(req, res){
        ClienteModel.findOneAndUpdate({'email': req.params.email}, req.body, {'new': true}).then(
            (cliente)=>{
                res.status(201).json(cliente);
            }
        )
    }

    static delete(req, res){
        ClienteModel.findOneAndDelete({'email': req.params.email}).then(
            (cliente)=>{
                res.status(201).json(cliente);
            }
        );
    }

    static retrieve(req, res){
        ClienteModel.findById(req.params.id, req.body).then(
            (cliente)=>{
                res.status(201).json(cliente);
            }
        )
    }

    static retrieveByEmail(req, res){
        ClienteModel.findOne({'email': req.params.email}).then(
            (cliente)=>{
                res.status(201).json(
                    {
                        cliente,
                        token: generateToken({_id: cliente._id})
                    })
                }
        ).catch(
            (err) => {
            res.status(500).json(err)
            console.log(err);
            return;
        })
    }
}

module.exports = ClienteService;