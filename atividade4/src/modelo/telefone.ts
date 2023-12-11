export type Telefone = {
    ddd: string;
    numero: string;
  };
  
  export default function criarTelefone(ddd: string, numero: string): Telefone {
    return {
      ddd,
      numero,
    };
  }
  