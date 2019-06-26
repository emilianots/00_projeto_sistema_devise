var mongoose = require('mongoose');

var Fase3Schema = mongoose.Schema(
    {
        nomeFase3: { type: String, required: true, max: 100 }
    }
);

var Fase3Model = mongoose.model('fase3', Fase3Schema);

module.exports = Fase3Model;