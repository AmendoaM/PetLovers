export default function criarProduto(nome: string, valor: number) {
    function getNome(): string {
        return nome;
    }

    function getValor(): number {
        return valor;
    }

    return {
        getNome,
        getValor
    };
}
