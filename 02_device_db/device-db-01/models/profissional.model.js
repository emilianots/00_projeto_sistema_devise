
var mongoose = require('mongoose');


var ProfissionalSchema = mongoose.Schema(
    {
        nome: { type: 'String', required: true },
        sobrenome: { type: "String", required: true },
        email: { type: "String", required: true, max: 100 },
        senha: { type: "String", required: true},
        dataNasc: { type: "Date", required: false, default: null},
        numeroTel: { type: "String", required: true, max: 10 },
        nCau: { type: "String", required: true, max: 100 },
        tipoProfissao: { type: "String", required: false, default: null },
        sexo: { type: "String", required: true},
        projetos: [{type: mongoose.Schema.Types.ObjectId, ref: 'projeto'}],
        equipeIds: [{type: mongoose.Schema.Types.ObjectId, ref: 'profissionais'}]

    }
)

var ProfissionalModel = mongoose.model("profissionais", ProfissionalSchema);

module.exports = ProfissionalModel;