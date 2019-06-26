const chatModel = require('../models/chat.model');

class ChatService{
    static register(req, res){
        chatModel.create(req.body).then(
            (Chat)=>{
                res.status(201).json(Chat);
            }
        )
    }

    static list(req, res){
        chatModel.find().exec().then(
            (Chat)=>{
                res.status(201).json(Chat);
            }
        )
    }

    static retrieve(req, res){
        chatModel.findById(req.params.id, req.body).then(
            (Chat)=>{
                res.status(201).json(Chat);
            }
        )
    }

    static update(req, res){
        chatModel.findOneAndUpdate({ '_id': req.body._id }, req.body, {'new': true}).then(
            (chat)=>{
                res.status(201).json(chat);
            }
        )
    }

}



module.exports = ChatService;