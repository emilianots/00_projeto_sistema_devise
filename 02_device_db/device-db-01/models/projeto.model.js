var mongoose = require('mongoose');

var ProjetoSchema = mongoose.Schema(
    {
        nome: { type: 'String', required: true, max: 200 },
        descricao: { type: 'String', required: false, max: 2000 },
        tipoCasa: {type: 'String',},
        metragem: { type: 'Number'},
        qtdComodos: {type: 'Number'},
        fase1: {type: mongoose.Schema.Types.ObjectId, ref: 'fase1'},
        fase2: {type: mongoose.Schema.Types.ObjectId, ref: 'fase2'},
        fase3: {type: mongoose.Schema.Types.ObjectId, ref: 'fase3'},
        fase4: {type: mongoose.Schema.Types.ObjectId, ref: 'fase4'}
    }
)

var ProjetoModel = mongoose.model("projeto", ProjetoSchema);
module.exports = ProjetoModel;