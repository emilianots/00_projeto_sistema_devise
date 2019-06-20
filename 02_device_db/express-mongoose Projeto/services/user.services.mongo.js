const UserModel = require('../models/user.model');

class UserService {
    static register(req, res) {
        UserModel.create(req.body).then(
            (user) => {
                res.status(201).json(user);
            }
        ).catch(
            (err)=>{
                res.status(500).json(err);
                console.log("Meu " + err);
            }
        )
    }

    static list(req, res) {
        UserModel.find().then(
            (users) => {
                res.status(201).json(users);
            }
        ).catch(
            (error) => {
                res.status(500).json(error);
            }
        );
    }

    static update(req, res) {
        UserModel.findByIdAndUpdate(req.params.id, req.body, { 'new': true }).then(
            (user) => {
                res.status(201).json(user);
            }
        );
    }

    //retorna o user deletado
    static delete(req, res) {
        UserModel.findByIdAndRemove(req.params.id).then(
            (user) => {
                res.status(201).json(user);
            }
        );
    }

    //retorna um user
    static retrieve(req, res) {
        UserModel.findById(req.params.id).then(
            (user) => {
                res.status(201).json(user);
            }
        );
    }

    //retorn um vetor de user
    static retrieveByLogin(req, res) {
        UserModel.find({ 'login': req.params.login }).then(
            (user) => {
                res.status(201).json(user);
            }
        );
    }
}

module.exports = UserService