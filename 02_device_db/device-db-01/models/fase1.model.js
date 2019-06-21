var mongoose = require('mongoose');

var Fase1Schema = mongoose.Schema(
    {
        clima: { type: String, required: false, default: null },
        freqUso: { type: String, required: false, default: null },
        qtdPessoas: { type: Number, required: false, default: null},
        pessoas: { type: Array, items: {type:Object}, required: false, default: null},
        externo: { type: Array, items: {type:Object}, required: false, default: null},
        interno: { type: Array, items: {type:Object}, required: false, default: null}
    }
);

var Fase1Model = mongoose.model('fase1', Fase1Schema);

module.exports = Fase1Model;