import React, { Component } from "react";
import Navbar from "../elementos/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import WhatsAppLogo from "../../routes/logo";

export default class ComprarProduto extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div>
          <h1 className="text-center mt-4" style={{ fontWeight: "bold" }}>
            Produtos
          </h1>
        </div>

        <div className="d-flex flex-column align-items-center">
          <div className="input-group position-relative mt-5" style={{ width: "400px" }}>
            <span className="input-group-text" id="basic-addon1">
            🐾
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="CPF do tutor"
              aria-label="CPF do tutor"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="mt-5" style={{ width: "400px", borderRadius: "50px" }}>
            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "30px" }}>
                    Selecionar
                  </th>
                  <th scope="col" style={{ width: "180px" }}>
                    Nome
                  </th>
                  <th scope="col" style={{ width: "70px" }}>
                    Valor
                  </th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th scope="row">
                    <input
                      className="form-check-input mt-0"
                      type="checkbox"
                      value=""
                      aria-label="Checkbox for following text input"
                    />
                  </th>
                  <td>coleira</td>
                  <td>R$78,00</td>
                </tr>
                <tr>
                  <th scope="row">
                    <input
                      className="form-check-input mt-0"
                      type="checkbox"
                      value=""
                      aria-label="Checkbox for following text input"
                    />
                  </th>
                  <td>ração</td>
                  <td>R$120,00</td>
                </tr>
                <tr>
                  <th scope="row">
                    <input
                      className="form-check-input mt-0"
                      type="checkbox"
                      value=""
                      aria-label="Checkbox for following text input"
                    />
                  </th>
                  <td>sachê</td>
                  <td>R$40,00</td>
                </tr>
                <tr>
                  <th scope="row">
                    <input
                      className="form-check-input mt-0"
                      type="checkbox"
                      value=""
                      aria-label="Checkbox for following text input"
                    />
                  </th>
                  <td>brinquedo</td>
                  <td>R$20,00</td>
                </tr>
                <tr>
                  <th scope="row">
                    <input
                      className="form-check-input mt-0"
                      type="checkbox"
                      value=""
                      aria-label="Checkbox for following text input"
                    />
                  </th>
                  <td>areia de gato</td>
                  <td>R$60,00</td>
                </tr>
                <tr>
                  <th scope="row">
                    <input
                      className="form-check-input mt-0"
                      type="checkbox"
                      value=""
                      aria-label="Checkbox for following text input"
                    />
                  </th>
                  <td>bolinha de plástico</td>
                  <td>R$10,00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-center mt-4">
          <button
            type="button"
            className="btn btn-info btn-purple me-2"
            style={{ backgroundColor: " #483d8b", color: "white", borderColor: "purple", width: "100px" }}
          >
            Cadastrar
          </button>
        </div>
        </div>
        <WhatsAppLogo />
      </div>
    );
  }
}
