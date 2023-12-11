import Navbar from "../elementos/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Component } from "react";
import WhatsAppLogo from "../../routes/logo";

export default class RgCadastroForm extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1 className="text-center mt-4" style={{ fontWeight: 'bold' }}>Cadastro de serviço</h1>
        <div className="d-flex justify-content-center mt-5">
          <div className="me-5">
            <div className="input-group mb-3">
              <span className="input-group-text">🐾</span>
              <input
                type="text"
                className="form-control larger-input"
                placeholder="CPF do tutor"
                aria-label="CPF do tutor"
                aria-describedby="basic-addon1"
                style={{ width: "500px" }}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">🐾</span>
              <input
                type="text"
                className="form-control larger-input"
                placeholder="RG do tutor"
                aria-label="RG do tutor"
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
        </div>

        <div className="d-flex justify-content-center mt-4">
          <button type="button" className="btn btn-info btn-purple me-2" style={{ backgroundColor: "#483d8b", color: "white", borderColor: "purple", width: "100px" }}>
            Cadastrar
          </button>
        </div>
        <WhatsAppLogo />
      </div>
    );
  }
}
