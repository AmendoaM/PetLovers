import React, { Component } from "react";
import Navbar from "../elementos/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import WhatsAppLogo from "../../routes/logo";

export default class ConsumirServico extends Component {
  render() {
    return (
        <div>
        <Navbar />

        <div>
          <h1 className="text-center mt-4" style={{ fontWeight: "bold" }}>
            Serviços
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
                  <td>lar temporário</td>
                  <td>R$45,00</td>
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
                  <td>passeio</td>
                  <td>R$89,00</td>
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
                  <td>tosa</td>
                  <td>R$35,00</td>
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
                  <td>corte de unha</td>
                  <td>R$25,00</td>
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
                  <td>creche</td>
                  <td>R$80,00</td>
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
                  <td>banho</td>
                  <td>R$80,00</td>
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
