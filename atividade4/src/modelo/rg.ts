export default function criarRG(valor: string, dataEmissao: Date) {
    let _dataEmissao = dataEmissao;
    let _valor = valor;

    function getDataEmissao(): Date {
        return _dataEmissao;
    }

    function getValor(): string {
        return _valor;
    }

    return {
        getDataEmissao,
        getValor
    };
}
export type RG = {
  
  };
  