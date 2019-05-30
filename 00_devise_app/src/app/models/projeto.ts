import { Cliente } from './cliente';
import { Profissional } from './profissional';
import { TipoConstrucao as TipoConstrucao } from "./tipoConstrucao";

export class Projeto{
    metragem: number;
    tipoConstr: TipoConstrucao;
    profissionalChefe: Profissional;
    cliente: Cliente;
    equipeProfissional: Array<Profissional>;
}
