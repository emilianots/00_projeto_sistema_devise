
var mongoose = require('mongoose');

var ClienteSchema = mongoose.Schema(
    {
        nome: { type: 'String', required: true, max: 100 },
        sobrenome: { type: "String", required: true, max: 100 },
        endereco: { type: "String", required: true, max: 150 },
        email: { type: "String", required: true, max: 100 },
        senha: { type: "String", required: true, max: 20 },
        dataNasc: { type: "Date", required: true},
        numeroTel: { type: "String", required: true, max: 10 },
        sexo: { type: "String", required: true, max: 100 }

    }
)

var ClienteModel = mongoose.model("clientes", ClienteSchema);

module.exports = ClienteModel;