export default function criarCPF(valor: string, dataEmissao: Date) {
    let _valor = valor;
    let _dataEmissao = dataEmissao;

    function getValor(): string {
        return _valor;
    }

    function getDataEmissao(): Date {
        return _dataEmissao;
    }

    return {
        getValor,
        getDataEmissao
    };
}
