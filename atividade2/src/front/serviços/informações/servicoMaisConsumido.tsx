import Navbar from "../../elementos/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Component } from "react";
import WhatsAppLogo from "../../../routes/logo";

export default class ServicosMaisConsumidosTabela extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <h2 className="position-absolute top-20 start-40  mt-4 mb-50" style={{ marginLeft: "550px" }}>
            Serviços mais consumidos
          </h2>
        </div>
        <div style={{ marginTop: "100px", width: "1000px", marginLeft: "250px", borderRadius: "50px" }}>
          <table className="table table-hover table-bordered mt-5 border border-primary-subtle rounded-2">
            <thead>
              <tr>
                <th scope="col">Posição</th>
                <th scope="col">Serviço</th>
                <th scope="col">Quantidade</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              <tr>
                <th scope="row">1</th>
                <td>tosa</td>
                <td>220</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>banho</td>
                <td>200</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>creche</td>
                <td>50</td>
              </tr>
            </tbody>
          </table>
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
                  <th scope="col">Serviços</th>
                  <th scope="col">Quantidade</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th scope="row">1</th>
                  <td>Arnaldo Torres</td>
                  <td>creche</td>
                  <td>3</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Maria de Jesus</td>
                  <td>passeio</td>
                  <td>2</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Alice Santos</td>
                  <td>lar temporárip</td>
                  <td>20</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>João pé de feijão</td>
                  <td>corte de unha</td>
                  <td>50</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Pablo da padaria</td>
                  <td>remédios injetáveis</td>
                  <td>40</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Joana D'Arc</td>
                  <td>tosa</td>
                  <td>80</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Alicia Maria</td>
                  <td>corte de pelo</td>
                  <td>60</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Paulo Marcio</td>
                  <td>lar temporário</td>
                  <td>10</td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>Marta Mayra</td>
                  <td>passeio</td>
                  <td>30</td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>Raimundo Cesar</td>
                  <td>banho e tosa</td>
                  <td>65</td>
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
                  <th scope="col">Serviço</th>
                  <th scope="col">Valor</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th scope="row">20</th>
                  <td>Arnaldo Torres</td>
                  <td>banho</td>
                  <td>R$50,00</td>
                </tr>
                <tr>
                  <th scope="row">70</th>
                  <td>Maria de Jesus</td>
                  <td>tosa</td>
                  <td>R$75,90</td>
                </tr>
                <tr>
                  <th scope="row">40</th>
                  <td>Alice Santos</td>
                  <td>passeio</td>
                  <td>R$90,99</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>João pé de feijão</td>
                  <td>lar temporário</td>
                  <td>R$60,00</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Pablo da padaria</td>
                  <td>corte de unha</td>
                  <td>R$167,80</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Joana D'Arc</td>
                  <td>aparar pelos</td>
                  <td>R$160,50</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Alicia Maria</td>
                  <td>escovação</td>
                  <td>R$158,70</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Paulo Marcio</td>
                  <td>escovação dentária</td>
                  <td>R$156,00</td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>Marta Mayra</td>
                  <td>passeio</td>
                  <td>R$140,99</td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>Raimundo Cesar</td>
                  <td>corte de pelos</td>
                  <td>R$70,80</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-5">
          <h2 className="text-center mt-5 mb-0">Serviços mais consumidos por raça</h2>
        </div>
        <div className="d-flex justify-content-center">
          <div className="w-50">
            <table className="table table-hover table-bordered mt-5 border border-primary-subtle rounded-2">
              <thead>
                <tr>
                  <th scope="col">Posição</th>
                  <th scope="col">Raça</th>
                  <th scope="col">Serviço</th>
                  <th scope="col">Quantidade</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th scope="row">1</th>
                  <td>Pinscher</td>
                  <td>banho</td>
                  <td>40</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>SRD</td>
                  <td>ração</td>
                  <td>40</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Golden</td>
                  <td>banho</td>
                  <td>70</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-5">
          <h2 className="text-center mt-5 mb-0">Serviços mais consumidos por espécie(tipo)</h2>
        </div>
        <div className="d-flex justify-content-center">
          <div className="w-50">
            <table className="table table-hover table-bordered mt-5 border border-primary-subtle rounded-2">
              <thead>
                <tr>
                  <th scope="col">Posição</th>
                  <th scope="col">Espécie</th>
                  <th scope="col">Serviço</th>
                  <th scope="col">Quantidade</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th scope="row">1</th>
                  <td>canina</td>
                  <td>tosa</td>
                  <td>110</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>felina</td>
                  <td>banho</td>
                  <td>40</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>calopsita</td>
                  <td>lar temporário</td>
                  <td>30</td>
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
