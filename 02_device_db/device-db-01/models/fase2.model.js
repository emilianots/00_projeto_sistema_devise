var mongoose = require('mongoose');

var Fase2Schema = mongoose.Schema(
    {
        nomeFase2: { type: String, required: true, max: 100 }
    }
);

var Fase2Model = mongoose.model('fase2', Fase2Schema);

module.exports = Fase2Model;