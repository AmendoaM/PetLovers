import criarServico from "./servico";
import criarProduto from "./produto";

// Definição do tipo Pet
export type Pet = {
  nome: string;
  especie: string;
  raca: string;
  sexo: string;
  produtosConsumidos: ReturnType<typeof criarProduto>[];
  servicosConsumidos: ReturnType<typeof criarServico>[];
  quantidadeTotalConsumida: number;
};

// Função para criar um Pet
export default function criarPet(nome: string, raca: string, sexo: string, especie: string): Pet {
  return {
    nome,
    especie,
    raca,
    sexo,
    produtosConsumidos: [],
    servicosConsumidos: [],
    quantidadeTotalConsumida: 0,
  };
}
