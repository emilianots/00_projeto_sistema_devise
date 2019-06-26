
var mongoose = require('mongoose');


var ProfissionalSchema = mongoose.Schema(
    {
        nome: { type: 'String', required: true, max: 100 },
        sobrenome: { type: "String", required: true, max: 100 },
        email: { type: "String", required: true, max: 100 },
        senha: { type: "String", required: true, max: 20 },
        dataNasc: { type: "Date", required: true},
        numeroTel: { type: "String", required: true, max: 10 },
        nCau: { type: "String", required: true, max: 100 },
        tipoProfissao: { type: "String", required: true, max: 100 },
        sexo: { type: "String", required: true, max: 100 },
        projetos: [{type: mongoose.Schema.Types.ObjectId, ref: 'projeto'}]

    }
)

var ProfissionalModel = mongoose.model("profissionais", ProfissionalSchema);

module.exports = ProfissionalModel;