const ProfissionalModel = require('../models/profissional.model');

class ProfissionalService{
    static register(req, res){
        ProfissionalModel.create(req.body).then(
            (profissional)=>{
                res.status(201).json(profissional);
            }
        )
    }

    static list(req, res){
        ProfissionalModel.find().then(
            (profissionais)=>{
                res.status(201).json(profissionais);
            }
        )
    }

    static update(req, res){
        ProfissionalModel.findOneAndUpdate({'email': req.params.email}, req.body, {'new': true}).then(
            (profissional)=>{
                res.status(201).json(profissional);
            }
        )
    }

    static delete(req, res){
        ProfissionalModel.findOneAndDelete({'email': req.params.email}).then(
            (profissional)=>{
                res.status(201).json(profissional);
            }
        );
    }

    static retrieve(req, res){
        ProfissionalModel.findById(req.params.id, req.body).then(
            (profissional)=>{
                res.status(201).json(profissional);
            }
        )
    }

    static retrieveByEmail(req, res){
        ProfissionalModel.find({'email': req.params.email}).then(
            (profissional)=>{
                res.status(201).json(profissional);
            }
        )
    }
}

module.exports = ProfissionalService;