import Navbar from "../elementos/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Component } from "react";
import WhatsAppLogo from "../../routes/logo";

function ClienteListarTabela() {
  return (
    <div>
      <Navbar />

      <div>
        <h1 className="text-center mt-4" style={{ fontWeight: "bold" }}>
          Registro de Clientes
        </h1>
      </div>
      <div style={{ marginTop: "100px", width: "1000px", marginLeft: "250px", borderRadius: "50px" }}>
        <table className="table table-hover table-bordered mt-5 border border-primary-subtle rounded-2">
          <thead>
            <tr>
              <th scope="col">Posição</th>
              <th scope="col">
                <div style={{ textAlign: "center" }}>Nome</div>
              </th>
              <th scope="col">
                <div style={{ textAlign: "center" }}>CPF</div>
              </th>
              <th scope="col">
                <div style={{ textAlign: "center" }}>RG</div>
              </th>
              <th scope="col">
                <div style={{ textAlign: "center" }}>Telefone</div>
              </th>
              <th scope="col">
                <div style={{ textAlign: "center" }}>Opções</div>
              </th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr>
              <th scope="row">1</th>
              <td>Arnaldo Antunes</td>
              <td>231.878.090-00</td>
              <td>24.224.090-10</td>
              <td>(12) 9887-28765</td>
              <td>
                <button
                  type="button"
                  className="btn btn-info btn-purple me-2"
                  style={{ backgroundColor: " #483d8b", color: "white", borderColor: "purple", width: "150px" }}
                >
                  Editar cliente
                </button>
                <button
                  type="button"
                  className="btn btn-info btn-purple me-2"
                  style={{ backgroundColor: " #483d8b", color: "white", borderColor: "purple", width: "150px" }}
                >
                  Excluir cliente
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Pablo Escobar</td>
              <td>444.555.777-88</td>
              <td>44.553.757-85</td>
              <td>(12) 9887-33457</td>
              <td><button
                  type="button"
                  className="btn btn-info btn-purple me-2"
                  style={{ backgroundColor: " #483d8b", color: "white", borderColor: "purple", width: "150px" }}
                >
                  Editar cliente
                </button>
                <button
                  type="button"
                  className="btn btn-info btn-purple me-2"
                  style={{ backgroundColor: " #483d8b", color: "white", borderColor: "purple", width: "150px" }}
                >
                  Excluir cliente
                </button></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Anastasia Romanov</td>
              <td>222.333.333-44</td>
              <td>22.363.393-40</td>
              <td>(12) 9889-00498</td>
              <td><button
                  type="button"
                  className="btn btn-info btn-purple me-2"
                  style={{ backgroundColor: " #483d8b", color: "white", borderColor: "purple", width: "150px" }}
                >
                  Editar cliente
                </button>
                <button
                  type="button"
                  className="btn btn-info btn-purple me-2"
                  style={{ backgroundColor: " #483d8b", color: "white", borderColor: "purple", width: "150px" }}
                >
                  Excluir cliente
                </button></td>
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
          Adicionar cliente
        </button>
      </div>
      <WhatsAppLogo />
    </div>
  );
}

export default ClienteListarTabela;
