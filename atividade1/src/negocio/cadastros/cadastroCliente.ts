import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Pet from "../../modelo/pet";
import Cadastro from "./cadastro";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";

export default class CadastroCliente extends Cadastro {
  private clientes: Array<Cliente>;
  private entrada: Entrada;
  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
    this.entrada = new Entrada();
  }
  public cadastrar(): void {
    console.log(`\nCadastro do cliente`);
    // dados do cliente
    let nome = this.entrada.receberTexto(`Insira o nome do cliente: `);
    let nomeSocial = this.entrada.receberTexto(`Caso necessário, insira o nome social do cliente: `);
    let valor = this.entrada.receberTexto(`Insira o número do CPF: `);
    let data = this.entrada.receberTexto(`Insira a data de emissão do CPF. (Ex: 09/09/2000): `);
    let valorRG = this.entrada.receberTexto(`Insira seu número de RG: `);
    let dataRG = this.entrada.receberTexto(`Insira a data de emissão do RG (Ex: 09/09/2000): `);
    let ddd = this.entrada.receberTexto(`Insira o DDD de seu telefone: `);
    let numeroTelefone = this.entrada.receberTexto(`Insira o número de seu telefone sem DDD: `);

    console.log(`\nAgora vamos aos dados do seu pet`);
    // dados do pet
    let nomePet = this.entrada.receberTexto("Insira o nome de seu pet: ");
    let especiePet = this.entrada.receberTexto("Insira a espcécie de seu pet: ");
    let racaPet = this.entrada.receberTexto("Insira a raça de seu pet: ");
    let sexoPet = this.entrada.receberTexto("Insira o sexo de seu pet: ");

    let partesData = data.split("/");
    let ano = new Number(partesData[2].valueOf()).valueOf();
    let mes = new Number(partesData[1].valueOf()).valueOf();
    let dia = new Number(partesData[0].valueOf()).valueOf();

    let partesDataRG = dataRG.split("/");
    let anoRG = new Number(partesDataRG[2].valueOf()).valueOf();
    let mesRG = new Number(partesDataRG[1].valueOf()).valueOf();
    let diaRG = new Number(partesDataRG[0].valueOf()).valueOf();

    let dataEmissao = new Date(ano, mes, dia);
    let dataEmissaoRG = new Date(anoRG, mesRG, diaRG);

    let cpf = new CPF(valor, dataEmissao);
    let rg = new RG(valorRG, dataEmissaoRG);
    let telefone = new Telefone(ddd, numeroTelefone);
    let pet = new Pet(nomePet, racaPet, sexoPet, especiePet);
    let cliente = new Cliente(nome, nomeSocial, cpf);

    cliente.adicionarPet(pet);
    cliente.adicionarRG(rg);
    cliente.adicionarTelefone(telefone);

    this.clientes.push(cliente);
    console.log(`\nCadastro realizado com sucesso!\n`);
  }
}
