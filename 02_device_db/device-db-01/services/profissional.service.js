/* const ProfissionalModel = require("../models/profissional.model");


let profissionais = [];
let id = 0;

class ProfissionalService {

    static register(data) {
        console.log("Profissional");
        let profissional = new ProfissionalModel(id++, data.nome, data.sobrenome, data.endereco, data.email, data.senha, data.dataNasc, data.numeroTel, data.sexo, data.nCau, data.listaProjetos);
        profissionais.push(profissional);
        return profissional;
    }

    static list() {
        return profissionais;
    }
}

module.exports = ProfissionalService; */