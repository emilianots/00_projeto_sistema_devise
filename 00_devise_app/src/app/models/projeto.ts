export class Projeto{
    _id: string;
    nome: string;
    descricao: string;
    endereco: string;

    nomeCliente: string;
    enderecoCliente: string;
    telefoneCliente: string;
    emailCliente: string;

    idCliente: string;

    chat: string;

    orcamento: number;
    
    metragemX: number;
    metragemZ: number;
    
    dataProjCriacao: Date;
    dataOrdemServico: Date;
    membroEquipe: [];
    
    comentarios: [];
    projObsId: string;
    
    fase1: string;
    fase2: string;
    fase3: string;
    fase4: string;

    isActive: boolean;
    isVisivel: boolean;
}
