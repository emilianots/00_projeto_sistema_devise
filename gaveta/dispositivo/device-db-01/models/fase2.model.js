var mongoose = require('mongoose');

var Fase2Schema = mongoose.Schema(
    {
        // Caso haja edificações no terrreno e o cliente queira manter essas estruturas, deve ser feito as
        // medições dessas estruturas
        edfLocal: { type: Array, items: {type:Object}, required: false, max: 100 }, // itens: Tipo / Descrição
        // O tipo é refente ao tipo de estrutura que se encontra lá. Se é uma casa, se são somente muros, etc
        levantTopografico: { type: Array, items: {type:Object}, required: false, max: 100 }, // itens: Tipo / Descrição
        // Tipos de Itens: Relevo do Terreno; Curvas de Nível; Perfil Longitudinal; Seções Transversais;
        // Elementos Existentes no Local; Metragem; Cálculo de Área; Pontos Cotados; Norte Magnético;
        // Coordenadas Geográficas; Acidentes Geográficos
        plantaTopografica: { type: String, required: false, max: 100} // Caso o usuário tenha a planta 
        // com as informações do levantamento topográfico, descartando as informações do atributo acima
    
    }
);

var Fase2Model = mongoose.model('fase2', Fase2Schema);

module.exports = Fase2Model;