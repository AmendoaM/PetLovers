import Navbar from "../elementos/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Component } from "react";
import WhatsAppLogo from "../../routes/logo";

export default class ClienteListarTabela extends Component {
  render(){
  return (
    <div>
      <Navbar />

    
        <div>
        <h1 className="text-center mt-4" style={{ fontWeight: 'bold' }}>Registro de Clientes</h1>
        </div>
        <div style={{marginTop: "100px", width: "1000px", marginLeft: "250px", borderRadius: "50px"}}>
          <table className="table table-hover table-bordered mt-5 border border-primary-subtle rounded-2">
            <thead>
              <tr>
                <th scope="col">Posição</th>
                <th scope="col">Nome</th>
                <th scope="col">CPF</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              <tr>
                <th scope="row">1</th>
                <td>Arnaldo Antunes</td>
                <td>231.878.090-00</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Pablo Escobar</td>
                <td>444.555.777-88</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Anastasia Romanov</td>
                <td>222.333.333-44</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button
            type="button"
            className="btn btn-info btn-purple me-2"
            style={{ backgroundColor: " #483d8b", color: "white", borderColor: "purple", width: "150px" }}
          >
            Excluir cliente
          </button>
        </div>
        <WhatsAppLogo />
      </div>
    
  );
}
}