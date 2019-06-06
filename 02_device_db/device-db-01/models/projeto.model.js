var mongoose = require('mongoose');

var ProjetoSchema = mongoose.Schema(
    {
        nome: { type: 'String', required: true, max: 200 },
        descricao: { type: 'String', required: false, max: 1000 },
        tipoCasa: { type: 'String', required: true, max: 100 },
        qtdComodos: { type: 'Number', required: true, max: 100 },
        metragem: { type: 'Number', required: true, max: 1000 },
        clienteId: { type: 'String', required: true, max: 500 },
        fase1Id: { type: 'String', required: true, max: 500 },
        fase2Id: { type: 'String', required: true, max: 500 },
        fase3Id: { type: 'String', required: true, max: 500 },
        fase4Id: { type: 'String', required: true, max: 500 },
        fase5Id: { type: 'String', required: true, max: 500 }
    }
)

var ProjetoModel = mongoose.model("projeto", ProjetoSchema);
module.exports = ProjetoModel;