import { ParteInterna } from './../fase1.detalhes/parteInterna';
import { ParteExterna } from './../fase1.detalhes/parteExterna';
import { Pessoa } from './../fase1.detalhes/pessoas';
export class Fase1{
    _id: string;
    clima: string;
    qtdPessoas: number;
    freqUso: string;
    interno: ParteInterna[];
    externo: ParteExterna[];
    pessoas: Pessoa[];
}