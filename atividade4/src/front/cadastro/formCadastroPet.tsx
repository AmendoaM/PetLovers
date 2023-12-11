import React, { Component, useState } from "react";
import Navbar from "../elementos/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import WhatsAppLogo from "../../routes/logo";

export default function PetCadastroForm() {
  const [cpf, setCpf] = useState("");
  const [nomePet, setNomePet] = useState("");
  const [especie, setEspecie] = useState("");
  const [raca, setRaca] = useState("");
  const [sexo, setSexo] = useState("");

  function handleCpfChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCpf(e.target.value);
  }

  function handleNomePetChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setNomePet(value);
  }

  function handleEspecieChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEspecie(e.target.value);
  }

  function handleRacaChange(e: React.ChangeEvent<HTMLInputElement>) {
    setRaca(e.target.value);
  }

  function handleSexoChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSexo(e.target.value);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    console.log({
      cpf,
      nomePet,
      especie,
      raca,
      sexo,
    });
  };

    return (
      <div>
        <Navbar />
        <h1 className="text-center mt-4" style={{ fontWeight: "bold" }}>
          Cadastro de pet
        </h1>

        <form onSubmit={handleSubmit}>
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
                value={nomePet}
                onChange={handleNomePetChange}
                className="form-control larger-input"
                placeholder="Nome do pet"
                aria-label="Nome do pet"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">🐾</span>
              <input
                type="text"
                value={especie}
                onChange={handleEspecieChange}
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
                value={raca}
                onChange={handleRacaChange}
                className="form-control larger-input"
                placeholder="Raça"
                aria-label="Raça"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">🐾</span>
              <input
                type="text"
                value={sexo}
                onChange={handleSexoChange}
                className="form-control larger-input"
                placeholder="Sexo"
                aria-label="Sexo"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <button
            type="submit"
            className="btn btn-info btn-purple me-2"
            style={{ backgroundColor: "#483d8b", color: "white", borderColor: "purple", width: "100px" }}
          >
            Cadastrar
          </button>
        </div>
        </form>
        <WhatsAppLogo />
      </div>
    );
  }

