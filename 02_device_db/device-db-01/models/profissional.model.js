
var mongoose = require('mongoose');

var ProfissionalSchema = mongoose.Schema(
    {
        nome: { type: 'String', required: true, max: 100 },
        sobrenome: { type: "String", required: true, max: 100 },
        endereco: { type: "String", required: true, max: 150 },
        email: { type: "String", required: true, max: 100 },
        senha: { type: "String", required: true, max: 20 },
        dataNasc: { type: "Date", required: true},
        numeroTel: { type: "String", required: true, max: 10 },
        nCau: { type: "String", required: true, max: 100 },
        sexo: { type: "String", required: true, max: 100 },
        listaProjetos: { type: "Array", required: true, max: 500 },

    }
)

var ProfissionalModel = mongoose.model("profissionais", ProfissionalSchema);

module.exports = ProfissionalModel;