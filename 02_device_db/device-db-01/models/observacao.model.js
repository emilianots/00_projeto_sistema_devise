
var mongoose = require('mongoose');


var ObservacaoSchema = mongoose.Schema(
    {
        nomeArq: 'String',
        nomeCLi: 'String',
        idProj: { type: mongoose.Schema.Types.ObjectId, ref: "projetos", required: true },
        texto: { type: 'String', required: true },
        data: { type: "Date", required: false, default: null }
    }
)

var ObservacaoModel = mongoose.model("observacoes", ObservacaoSchema);

module.exports = ObservacaoModel;