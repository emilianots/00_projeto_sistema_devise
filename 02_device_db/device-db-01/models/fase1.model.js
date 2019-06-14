var mongoose = require('mongoose');

var Fase1Schema = mongoose.Schema(
    {
        clima: { type: String, required: true, max: 100 },
        freqUso: { type: String, required: true, max: 100 },
        qtdPessoas: { type: Number, required: true, max: 100 },
        pessoas: { type: Array, items: {type:Object}, required: true, max: 100 },
        externo: { type: Array, items: {type:Object}, required: true, max: 100 },
        interno: { type: Array, items: {type:Object}, required: true, max: 100 }
    }
);

var Fase1Model = mongoose.model('fase1', Fase1Schema);

module.exports = Fase1Model;