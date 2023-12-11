import criarCPF from "./cpf";
import type { Pet } from "./pet";
import type { Telefone } from "./telefone";
import type { Servico } from "./servico";
import criarProduto from "./produto";
import type { RG } from "./rg";






export interface Cliente {
  nome: string;
  nomeSocial: string;
  cpf: ReturnType<typeof criarCPF>;
  rgs: RG[];
  dataCadastro: Date;
  telefones: Telefone[];
  produtosConsumidos: ReturnType<typeof criarProduto>[];
  servicosConsumidos: Servico[];
  pets: Pet[];
  valorGasto: number;
  quantidadeTotalConsumida: number;
}

function criarCliente(nome: string, nomeSocial: string, cpf: ReturnType<typeof criarCPF>): Cliente {
  return {
    nome,
    nomeSocial,
    cpf,
    rgs: [],
    dataCadastro: new Date(),
    telefones: [],
    produtosConsumidos: [],
    servicosConsumidos: [],
    pets: [],
    valorGasto: 0,
    quantidadeTotalConsumida: 0,
  };
}

export default criarCliente;
