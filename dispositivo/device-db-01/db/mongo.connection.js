var mongoose = require('mongoose')

mongoose.set('useFindAndModify', false);

var mongoDB_URI = 'mongodb://localhost/deviceDB';
mongoose.connect(mongoDB_URI, {useNewUrlParser: true});

var db = mongoose.connection;

db.on('connected', ()=>{
    console.log("Mongoose Connected to " + mongoDB_URI)
});

db.on('disconnected', ()=>{
    console.log("Mongoose Disonnected to " + mongoDB_URI)
});

db.on('error', (err)=>{
    console.log("Mongoose Error " + err)
});
