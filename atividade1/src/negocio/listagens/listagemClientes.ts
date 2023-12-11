import Cliente from "../../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
  private clientes: Array<Cliente>;
  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
  }
  public listar(): void {
    console.log(`\nLista de todos os clientes:\n`);
    this.clientes.forEach((cliente) => {
      console.log(`Nome: ` + cliente.nome);
      console.log(`Nome social: ` + cliente.nomeSocial);
      console.log(`CPF: ` + cliente.getCpf.getValor);

      let listaRgs = [];
      let listaTelefones = [];
      let listaPets = [];
      let listaProdutosConsumidos = [];
      let listaServicosAtribuidos = [];
      let totalGastoServico = 0;
      let totalGastoProduto = 0;

      for (let y = 0; y < cliente.getRgs.length; y++) {
        listaRgs.push(cliente.getRgs[y].getValor);
      }

      for (let z = 0; z < cliente.getTelefones.length; z++) {
        let telefoneFormatado = `(${cliente.getTelefones[z].getDDD}) ${cliente.getTelefones[z].getNumero}`;
        listaTelefones.push(telefoneFormatado);
      }

      for (let x = 0; x < cliente.getPets.length; x++) {
        listaPets.push(cliente.getPets[x].getNome);
      }

      for (let y = 0; y < cliente.getServicosConsumidos.length; y++) {
        listaServicosAtribuidos.push(cliente.getServicosConsumidos[y].nome);
        totalGastoServico += cliente.getServicosConsumidos[y].valor;
      }

      for (let x = 0; x < cliente.getProdutosConsumidos.length; x++) {
        listaProdutosConsumidos.push(cliente.getProdutosConsumidos[x].nome);
        totalGastoProduto += cliente.getProdutosConsumidos[x].valor;
      }

      let totalGasto = totalGastoProduto + totalGastoServico;

      console.log(`RGs: ${listaRgs}`);
      console.log(`Telefones: ${listaTelefones}`);
      console.log(`Pets: ${listaPets}`);
      console.log(cliente.getPets[0].getServicosConsumidos);
      console.log(cliente.getPets[0].getProdutosConsumidos);
      console.log(`Serviços atribuídos: ${listaServicosAtribuidos}`);
      console.log(`Produtos consumidos: ${listaProdutosConsumidos}`);
      console.log(`Valor gasto: ${totalGasto.toFixed(2)}`);
      console.log(`\n***********************************************`);
    });
  }
}
