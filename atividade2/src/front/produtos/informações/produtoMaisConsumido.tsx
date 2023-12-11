import Navbar from "../../elementos/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Component } from "react";
import WhatsAppLogo from "../../../routes/logo";

export default class ProdutosMaisConsumidosTabela extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="mt-4">
          <h2 className="text-center mt-4 mb-0">Produtos mais consumidos</h2>
        </div>
        <div className="d-flex justify-content-center mb-4">
          <div className="w-50">
            <table className="table table-hover table-bordered mt-5 border border-primary-subtle rounded-2">
              <thead>
                <tr>
                  <th scope="col">Posição</th>
                  <th scope="col">Produto</th>
                  <th scope="col">Quantidade</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th scope="row">1</th>
                  <td>ração</td>
                  <td>3</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>sachê</td>
                  <td>2</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>coleira</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-5">
          <h2 className="text-center mt-5 mb-0">Top 10 clientes que mais consumiram</h2>
        </div>
        <div className="d-flex justify-content-center">
          <div className="w-50">
            <table className="table table-hover table-bordered mt-5 border border-primary-subtle rounded-2">
              <thead>
                <tr>
                  <th scope="col">Posição</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Produto</th>
                  <th scope="col">Quantidade</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th scope="row">1</th>
                  <td>Arnaldo Torres</td>
                  <td>coleira</td>
                  <td>3</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Maria de Jesus</td>
                  <td>ração</td>
                  <td>2</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Alice Santos</td>
                  <td>areia de gato</td>
                  <td>1</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>João pé de feijão</td>
                  <td>brinquedo</td>
                  <td>25</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Pablo da padaria</td>
                  <td>sachê</td>
                  <td>29</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Joana D'Arc</td>
                  <td>roupinha</td>
                  <td>20</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Alicia Maria</td>
                  <td>casinha</td>
                  <td>15</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Paulo Marcio</td>
                  <td>grãos</td>
                  <td>10</td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>Marta Mayra</td>
                  <td>pote</td>
                  <td>15</td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>Raimundo Cesar</td>
                  <td>caixa de areia</td>
                  <td>8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-5">
          <h2 className="text-center mt-5 mb-0">Top 10 clientes que mais consumiram produtos em valor</h2>
        </div>
        <div className="d-flex justify-content-center">
          <div className="w-50">
            <table className="table table-hover table-bordered mt-5 border border-primary-subtle rounded-2">
              <thead>
                <tr>
                  <th scope="col">Posição</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Produto</th>
                  <th scope="col">Valor</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th scope="row">20</th>
                  <td>Arnaldo Torres</td>
                  <td>coleira</td>
                  <td>R$50,00</td>
                </tr>
                <tr>
                  <th scope="row">70</th>
                  <td>Maria de Jesus</td>
                  <td>ração</td>
                  <td>R$75,90</td>
                </tr>
                <tr>
                  <th scope="row">40</th>
                  <td>Alice Santos</td>
                  <td>areia de gato</td>
                  <td>R$90,99</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>João pé de feijão</td>
                  <td>caixa de areia</td>
                  <td>R$60,00</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Pablo da padaria</td>
                  <td>areia</td>
                  <td>R$167,80</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Joana D'Arc</td>
                  <td>bolinha</td>
                  <td>R$160,50</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Alicia Maria</td>
                  <td>antipulga</td>
                  <td>R$158,70</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Paulo Marcio</td>
                  <td>ração</td>
                  <td>R$156,00</td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>Marta Mayra</td>
                  <td>focinheira</td>
                  <td>R$140,99</td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>Raimundo Cesar</td>
                  <td>tapete higiênico</td>
                  <td>R$70,80</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-5">
          <h2 className="text-center mt-5 mb-0">Produtos mais consumidos por raça</h2>
        </div>
        <div className="d-flex justify-content-center">
          <div className="w-50">
            <table className="table table-hover table-bordered mt-5 border border-primary-subtle rounded-2">
              <thead>
                <tr>
                  <th scope="col">Posição</th>
                  <th scope="col">Raça</th>
                  <th scope="col">Produto</th>
                  <th scope="col">Quantidade</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th scope="row">1</th>
                  <td>Pinscher</td>
                  <td>coleira</td>
                  <td>5</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>SRD</td>
                  <td>ração</td>
                  <td>40</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Border Collie</td>
                  <td>Brinquedo</td>
                  <td>20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-5">
          <h2 className="text-center mt-5 mb-0">Produtos mais consumidos por espécie(tipo)</h2>
        </div>
        <div className="d-flex justify-content-center">
          <div className="w-50">
            <table className="table table-hover table-bordered mt-5 border border-primary-subtle rounded-2">
              <thead>
                <tr>
                  <th scope="col">Posição</th>
                  <th scope="col">Espécie</th>
                  <th scope="col">Produto</th>
                  <th scope="col">Quantidade</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th scope="row">1</th>
                  <td>canina</td>
                  <td>coleira</td>
                  <td>90</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>felina</td>
                  <td>ração</td>
                  <td>40</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>calopsita</td>
                  <td>brinquedo</td>
                  <td>50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <WhatsAppLogo />
      </div>
    );
  }
}
