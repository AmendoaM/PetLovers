import Navbar from "../elementos/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Component } from "react";
import WhatsAppLogo from "../../routes/logo";

export default class ServicoListarTabela extends Component {
  render(){
  return (
    <div>
      <Navbar />

    
        <div>
        <h1 className="text-center mt-4" style={{ fontWeight: 'bold' }}> Registro de serviços</h1>
        </div>
        <div style={{marginTop: "100px", width: "1000px", marginLeft: "250px", borderRadius: "50px"}}>
          <table className="table table-hover table-bordered mt-5">
            <thead>
              <tr>
                <th scope="col">Posição</th>
                <th scope="col">Nome</th>
                <th scope="col">Valor</th>
                <th scope="col">Quantidade Consumida</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              <tr>
                <th scope="row">1</th>
                <td>banho</td>
                <td>R$80,00</td>
                <td>87</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>tosa</td>
                <td>R$80,00</td>
                <td>70</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>passeio</td>
                <td>R$65,00</td>
                <td>35</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>creche</td>
                <td>R$85,00</td>
                <td>30</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>lar temporário</td>
                <td>R$75,00</td>
                <td>50</td>
              </tr>
            </tbody>
          </table>
        </div>
        <WhatsAppLogo />
      </div>
    
  );
}
}