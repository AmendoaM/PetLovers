import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto";

export default class EditorProduto {
    private entrada: Entrada
    constructor() {
        this.entrada = new Entrada()
    }

    public editar(produto: Produto): void {
        console.log(`\nEdição das informações de produtos`);
        let nome = this.entrada.receberTexto(`Insira o novo nome do produto: `)
        let valor = this.entrada.receberNumero(`Insira o novo valor do produto: `)
       
        produto.nome = nome
        produto.valor = valor

        console.log(`\nEdição realizada com sucesso!\n`);

        
        
    }
    
}