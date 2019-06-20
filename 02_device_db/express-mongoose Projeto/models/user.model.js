var mongoose = require('mongoose');
//criando o schema, o qual servirá para criar o modelo (collections)
var UserSchema = mongoose.Schema(
 {
 firstName: {type:String, required:true, max:100},
 lastName: {type:String, required:true, max:100},
 login: {type:String, required:true, max:100},
 email: {type:String, required:true, max:100},
 zipcode: {type:String, required:true, max:10},
 password: {type:String, required:true, max:20}
 }
);
//criando o modelo a partir do schema acima, o qual servirá para incluir as instâncias
//(documentos)
var UserModel = mongoose.model('users', UserSchema);

//retornando o modelo a ser usado pelo serviço (CRUD).
module.exports = UserModel;