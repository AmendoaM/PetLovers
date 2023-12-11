import React, { Component, useState } from "react";
import Navbar from "../elementos/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import WhatsAppLogo from "../../routes/logo";

export default function ServicoFormCadastro() {
  const [nomeServico, setNomeServico] = useState("");
  const [valorServico, setValorServico] =useState(0);

  function handleNomeServicoChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNomeServico(e.target.value);
  }

  function handleValorServicoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setValorServico(parseInt(value, 10) || 0); 
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log({
      nomeServico,
      valorServico
    });
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
      <h1 className="text-center mt-4" style={{ fontWeight: 'bold' }}>Cadastro de serviço</h1>
        <div className="d-flex justify-content-center mt-5">
          <div className="me-5">
            <div className="input-group mb-3">
              <span className="input-group-text">🐾</span>
              <input
                type="text"
                value={nomeServico}
                onChange={handleNomeServicoChange}
                className="form-control larger-input"
                placeholder="Nome do serviço"
                aria-label="Nome do serviço"
                aria-describedby="basic-addon1"
                style={{ width: "500px" }}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">🐾</span>
              <input
                type="number"
                value={valorServico}
                onChange={handleValorServicoChange}
                className="form-control larger-input"
                placeholder="Valor do serviço"
                aria-label="Valor do serviço"
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
