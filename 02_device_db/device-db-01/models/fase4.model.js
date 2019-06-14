var mongoose = require('mongoose');

var Fase4Schema = mongoose.Schema(
    {
        nomeFase4: { type: String, required: true, max: 100 }
    }
);

var Fase4Model = mongoose.model('fase4', Fase4Schema);

module.exports = Fase4Model;