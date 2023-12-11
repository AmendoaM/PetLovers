import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";

export default function cadastrarPet(cliente: Cliente) {
  let entrada = new Entrada();
  let nomePet = entrada.receberTexto("Insira o nome de seu pet: ");
  let especiePet = entrada.receberTexto("Insira o especie de seu pet: ");
  let racaPet = entrada.receberTexto("Insira a raça de seu pet: ");
  let sexoPet = entrada.receberTexto("Insira o gênero de seu pet: ");

  let novoPet = new Pet(nomePet, racaPet, sexoPet, especiePet);
  cliente.adicionarPet(novoPet);


}
