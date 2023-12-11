export type Servico = {
    nome: string;
    valor: number;
  };
  
  export default function criarServico(nome: string, valor: number): Servico {
    return {
      nome,
      valor,
    };
  }
  