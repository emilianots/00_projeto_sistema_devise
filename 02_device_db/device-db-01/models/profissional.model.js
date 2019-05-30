/* class ProfissionalModel{
    constructor(id, nome, sobrenome, endereco, email, senha, dataNasc, numeroTel, sexo, nCau, listaProjetos){
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.endereco = endereco;
        this.email = email;
        this.senha = senha;
        this.dataNasc = dataNasc;
        this.numeroTel = numeroTel;
        this.sexo = sexo;
        this.nCau = nCau;
        this.listaProjetos = listaProjetos;
    }
}

module.exports = ProfissionalModel; */

var mongoose = require('mongoose');

var ProfissionalSchema = mongoose.Schema(
    {
        nome: { type: 'String', required: true, max: 100 },
        sobrenome: { type: "String", required: true, max: 100 },
        endereco: { type: "String", required: true, max: 150 },
        email: { type: "String", required: true, max: 100 },
        senha: { type: "String", required: true, max: 20 },
        dataNasc: { type: "Date", required: true},
        numeroTel: { type: "String", required: true, max: 10 },
        nCau: { type: "String", required: true, max: 100 },
        sexo: { type: "String", required: true, max: 100 },
        listaProjetos: { type: "Array", required: true, max: 500 },

    }
)

var UserModel = mongoose.model("profissionais", ProfissionalSchema);

module.exports = UserModel;