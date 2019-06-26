var mongoose = require('mongoose');

var ProjetoSchema = mongoose.Schema(
    {
        nome: { type: 'String', required: true, max: 200 },
        endereco: {type: 'String', required: false, default: null},
        descricao: { type: 'String', required: false, default: null },

        idCliente: {type: mongoose.Schema.Types.ObjectId, ref: 'clientes', required: false , default: null},
        nomeCliente: {type: 'String', required: false, default: null},
        enderecoCliente: {type: 'String', required: false, default: null},
        telefoneCliente: {type: 'String', required: false, default: null},
        emailCliente: {type: 'String', required: false, default: null},

        orcamento: {type: 'Number', default: null},
        
        metragemX: { type: 'Number', default: null },
        metragemZ: { type: 'Number', default: null },

        dataProjCriacao: { type: "Date", required: false, default: null },
        dataOrdemServico: { type: "Date", default: null },
        membrosEquipe: [{ type: mongoose.Schema.Types.ObjectId, ref: 'profissionais' }],

        comments: [{ type: 'Array', items: { type: 'Object' } }],

        projObsId: { type: mongoose.Schema.Types.ObjectId, ref: "observacoes", required: false, default: null },
        observacoes: { type: 'String', required: false, default: null },

        fase1: { type: mongoose.Schema.Types.ObjectId, ref: 'fase1', required: false, default: null },
        fase2: { type: mongoose.Schema.Types.ObjectId, ref: 'fase2', required: false, default: null },
        fase3: { type: mongoose.Schema.Types.ObjectId, ref: 'fase3', required: false, default: null },
        fase4: { type: mongoose.Schema.Types.ObjectId, ref: 'fase4', required: false, default: null },

        chat: { type: 'String', required: false, default: null},

        isActive: { type: 'Boolean', default: true }, //PARA PROJETOS FINALIZADOS;e
        isVisivel: { type: 'Boolean', default: false } //PARA visualização do cliente
    }
)

var ProjetoModel = mongoose.model("projeto", ProjetoSchema);
module.exports = ProjetoModel;