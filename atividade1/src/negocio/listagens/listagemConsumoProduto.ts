import Cliente from "../../modelo/cliente";

export default function listarProdutosConsumidos(cliente: Cliente) {
    console.log(`\nLista dos produtos utilizados pelo cliente ${cliente.nome}`)

    for (let x = 0; x < cliente.getProdutosConsumidos.length; x++) {
        console.log(`${x + 1} - ${cliente.getProdutosConsumidos[x].nome}`)
    }
}