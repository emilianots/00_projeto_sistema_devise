const ClienteModel = require('../models/cliente.model');

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
        ClienteModel.find({'email': req.params.email}).then(
            (cliente)=>{
                res.status(201).json(cliente);
            }
        )
    }
}

module.exports = ClienteService;