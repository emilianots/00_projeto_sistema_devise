var mongoose = require('mongoose');

var fase4Schema = mongoose.Schema(
    {
        projExecutivo: { type: String, required: true, max: 100 }, // path do arquivo
    },
);

var fase4Model = mongoose.model('fase4', fase4Schema);

module.exports = fase4Model;