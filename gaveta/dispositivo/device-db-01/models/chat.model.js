
var mongoose = require('mongoose');

var ChatSchema = mongoose.Schema(
    {
        msgs: { type: Array, items: {type:Object}, required: false, max: 3000, default: null } // Objeto: { remet: $id; dest: $id; msg: $string }
    }
)

var ChatModel = mongoose.model("chat", ChatSchema);

module.exports = ChatModel;