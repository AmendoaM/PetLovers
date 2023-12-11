import Entrada from "../../io/entrada"
import Servico from "../../modelo/servico";

export default class EditorServico {
    private entrada: Entrada
    constructor() {
        this.entrada = new Entrada()
    }

    public editar(servico: Servico): void {
        console.log(`\nEdição das informações de serviços`);
        let nome = this.entrada.receberTexto(`Insira o novo nome do serviço: `)
        let valor = this.entrada.receberNumero(`Insira o novo preço do serviço: `)

        servico.nome = nome
        servico.valor = valor
        
        console.log(`\nEdição realizada com sucesso!:)\n`);
    }
}