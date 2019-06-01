import { Profissao } from './profissao';
import { Cliente } from './cliente';

export class Profissional extends Cliente{
    nCau: string;
    listaProjetos: [];
    tipoProfissao: Profissao;
}
