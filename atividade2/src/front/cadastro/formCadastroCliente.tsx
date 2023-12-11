import React, { Component } from "react";
import Navbar from "../elementos/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import WhatsAppLogo from "../../routes/logo";

export default class ClienteFormCadastro extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <h1 className="text-center mt-4" style={{ fontWeight: "bold" }}>
          Cadastro do Cliente
        </h1>

        <div className="d-flex justify-content-center mt-5">
          <div className="me-5">
            <h6 className="text-center mb-4" style={{ fontWeight: "bold" }}>
              Dados do Cliente
            </h6>
            <div className="input-group mb-3">
              <span className="input-group-text">🐾</span>
              <input
                type="text"
                className="form-control larger-input"
                placeholder="Nome"
                aria-label="Nome"
                aria-describedby="basic-addon1"
                style={{ width: "500px" }}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">🐾</span>
              <input
                type="text"
                className="form-control larger-input"
                placeholder="Nome Social"
                aria-label="Nome Social"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">🐾</span>
              <input
                type="text"
                className="form-control larger-input"
                placeholder="CPF"
                aria-label="CPF"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">🐾</span>
              <input
                type="text"
                className="form-control larger-input"
                placeholder="Data de emissão do CPF"
                aria-label="Data de emissão do CPF"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">🐾</span>
              <input
                type="text"
                className="form-control larger-input"
                placeholder="Telefone"
                aria-label="Telefone"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">🐾</span>
              <input
                type="text"
                className="form-control larger-input"
                placeholder="RG"
                aria-label="RG"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">🐾</span>
              <input
                type="text"
                className="form-control larger-input"
                placeholder="Data de emissão do RG"
                aria-label="Data de emissão do RG"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div>
            <div className="d-flex flex-column align-items-center">
              <div className="mb-3">
                <h6 className="text-center mb-4" style={{ fontWeight: "bold"}}>
                  Dados do Pet
                </h6>
              </div>
              <div className="input-group mb-3" style={{marginTop:"-16px"}}>
                <span className="input-group-text">🐾</span>
                <input
                  type="text"
                  className="form-control larger-input"
                  placeholder="Nome do pet"
                  aria-label="Nome do pet"
                  aria-describedby="basic-addon1"
                  style={{ width: "500px" }}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">🐾</span>
                <input
                  type="text"
                  className="form-control larger-input"
                  placeholder="Espécie"
                  aria-label="Espécie"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">🐾</span>
                <input
                  type="text"
                  className="form-control larger-input"
                  placeholder="Raça"
                  aria-label="Raça "
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">🐾</span>
                <input
                  type="text"
                  className="form-control larger-input"
                  placeholder="Sexo"
                  aria-label="Sexo"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
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
        <WhatsAppLogo />
      </div>
      
    );
  }
}
