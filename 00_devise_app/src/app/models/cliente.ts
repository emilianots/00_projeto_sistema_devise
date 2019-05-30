import { Endereco } from './endereco';

export class Cliente{
    _id: number;
    nome: string;
    sobrenome: string;
    endereco: Endereco;
    email: string;
    senha: string;
    dataNasc: Date;
    numeroTel: string;
    sexo: string;
}