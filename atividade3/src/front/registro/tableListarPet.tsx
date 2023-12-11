import Navbar from "../elementos/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Component } from "react";
import WhatsAppLogo from "../../routes/logo";


function PetListarTabela() {
  return (
    <div>
      <Navbar />

      <div>
        <h1 className="text-center mt-4" style={{ fontWeight: "bold" }}>
          Registro de pets
        </h1>
      </div>
      <div style={{ marginTop: "100px", width: "1000px", marginLeft: "250px", borderRadius: "50px" }}>
        <table className="table table-hover table-bordered mt-5">
          <thead>
            <tr>
            <th scope="col">
                <div style={{ textAlign: "center" }}>Posição</div>
              </th>
              <th scope="col">
                <div style={{ textAlign: "center" }}>Nome</div>
              </th>
              <th scope="col">
                <div style={{ textAlign: "center" }}>Espécie</div>
              </th>
              <th scope="col">
                <div style={{ textAlign: "center" }}>Raça</div>
              </th>
              <th scope="col">
                <div style={{ textAlign: "center" }}>Responsável</div>
              </th>
              <th scope="col">
                <div style={{ textAlign: "center" }}>Opções</div>
              </th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr>
              <th scope="row">1</th>
              <td>Cleo</td>
              <td>Canina</td>
              <td>Doggo Argentino</td>
              <td>Antonieta de Morais</td>
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
              <td>Marrie</td>
              <td>Felina</td>
              <td>Siamês</td>
              <td>Rui Barbosa</td>
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
              <th scope="row">3</th>
              <td>Jiló</td>
              <td>Canina</td>
              <td>SRD</td>
              <td>Taty Quebra-Barraco</td>
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
          </tbody>
        </table>
        <div className="d-flex justify-content-center mt-4">
          <button
            type="button"
            className="btn btn-info btn-purple me-2"
            style={{ backgroundColor: " #483d8b", color: "white", borderColor: "purple", width: "150px" }}
          >
            Adicionar cliente
          </button>
        </div>
      </div>
      <WhatsAppLogo />
    </div>
  );
}

export default PetListarTabela;
