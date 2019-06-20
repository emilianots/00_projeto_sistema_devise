var mongoose = require('mongoose');

var Fase3Schema = mongoose.Schema(
    {
        // Plantas
        pBaixa: { type: String, required: true, max: 100 }, // path do arquivo
        pDeSituacao: { type: String, required: true, max: 100 }, // path do arquivo
        pDeLocalizacao: { type: String, required: true, max: 100 }, // path do arquivo
        pCobertura: { type: String, required: true, max: 100 }, // path do arquivo

        // profsEnvolvidos: { type: Array, items: {type:String}, required: true, max: 100 }, 
        profsEnvolvidos: { type: String, required: true, max: 100 }, // Profissionais envolvidos na obra

        // Cortes
        cLongitudinal: { type: String, required: true, max: 100 }, // path do arquivo
        cTransversal: { type: String, required: true, max: 100 }, // path do arquivo

        fachada: { type: String, required: true, max: 100 }, // path do arquivo

        // Projeto Legal - Documentação Necessária para a Elaboração da Obra
        codObras: { type: String, required: true, max: 100 }, // path do arquivo
        requerimento: { type: String, required: true, max: 100 }, // path do arquivo
        memorial: { type: String, required: true, max: 100 }, // path do arquivo
        cronoExecObra: { type: String, required: true, max: 100 }, // path do arquivo
        CNDdoINSS: { type: String, required: true, max: 100 }, // path do arquivo
        alvara: { type: String, required: true, max: 100 }, // path do arquivo
        CVCO: { type: String, required: true, max: 100 }, // path do arquivo - Certificado de Vistoria e Conclusão de Obra
        acoCRI: { type: String, required: true, max: 100 }, // path do arquivo - Adverbação da Conclusão da Obra no CRI
    },
);

var Fase3Model = mongoose.model('fase3', Fase3Schema);

module.exports = Fase3Model;