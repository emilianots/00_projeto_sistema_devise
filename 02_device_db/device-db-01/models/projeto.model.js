var mongoose = require('mongoose');

var ProjetoSchema = mongoose.Schema(
    {
        nome: { type: 'String', required: true, max: 200 },
        descricao: { type: 'String', required: false, max: 2000 },
        tipoCasa: {type: 'String'},
        metragem: { type: 'Number'},
        qtdComodos: {type: 'Number'},
        fase1: {type: mongoose.Schema.Types.ObjectId, ref: 'fase1', required: false, default: null},
        fase2: {type: mongoose.Schema.Types.ObjectId, ref: 'fase2', required: false, default: null},
        fase3: {type: mongoose.Schema.Types.ObjectId, ref: 'fase3', required: false, default: null},
        fase4: {type: mongoose.Schema.Types.ObjectId, ref: 'fase4', required: false, default: null}
    }
)

var ProjetoModel = mongoose.model("projeto", ProjetoSchema);
module.exports = ProjetoModel;