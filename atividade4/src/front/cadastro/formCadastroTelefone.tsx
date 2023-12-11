import React, { Component, useState } from "react";
import Navbar from "../elementos/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import WhatsAppLogo from "../../routes/logo";

export default function TelefoneCadastroForm() {
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");

  function handleCpfChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCpf(e.target.value);
  }

  function handleTelefoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTelefone(e.target.value);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log({
      cpf,
      telefone
    });
  };

    return (
      <div>
        <Navbar />
        <form onSubmit={handleSubmit}>
        <h1 className="text-center mt-4" style={{ fontWeight: 'bold' }}>Cadastro de telefone</h1>
        <div className="d-flex justify-content-center mt-5">
          <div className="me-5">
            <div className="input-group mb-3">
              <span className="input-group-text">🐾</span>
              <input
                type="text"
                value={cpf}
                onChange={handleCpfChange}
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
                value={telefone}
                onChange={handleTelefoneChange}
                className="form-control larger-input"
                placeholder="Telefone"
                aria-label="Telefone"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <button type="submit" className="btn btn-info btn-purple me-2" style={{ backgroundColor: "#483d8b", color: "white", borderColor: "purple", width: "100px" }}>
            Cadastrar
          </button>
        </div>
        </form>
        <WhatsAppLogo />
      </div>
    );
  }

