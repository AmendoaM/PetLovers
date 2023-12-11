import React, { useState } from "react";
import Navbar from "../elementos/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import WhatsAppLogo from "../../routes/logo";

export default function ClienteFormCadastro() {
  const [nome, setNome] = useState("");
  const [nomeSocial, setNomeSocial] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataEmissaoCpf, setDataEmissaoCpf] = useState<Date>(new Date());
  const [rg, setRg] = useState("");
  const [dataEmissaoRg, setDataEmissaoRg] = useState<Date>(new Date());
  const [telefone, setTelefone] = useState("");
  const [nomePet, setNomePet] = useState("");
  const [especie, setEspecie] = useState("");
  const [raca, setRaca] = useState("");
  const [sexo, setSexo] = useState("");
  const [placeholderCpf, setPlaceholderCpf] = useState("Data de emissão do CPF");
  const [placeholderRg, setPlaceholderRg] = useState("Data de emissão do RG");

  function handleNomeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNome(e.target.value);
  }

  function handleNomeSocialChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNomeSocial(e.target.value);
  }

  function handleCpfChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCpf(e.target.value);
  }

  function handleDataEmissaoCpfChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const date = new Date(value);
    setDataEmissaoCpf(date);
  }

  function handleRgChange(e: React.ChangeEvent<HTMLInputElement>) {
    setRg(e.target.value);
  }

  function handleDataEmissaoRgChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const date = new Date(value);
    setDataEmissaoRg(date);
  }

  function handleTelefoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTelefone(e.target.value);
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      nome,
      nomeSocial,
      cpf,
      dataEmissaoCpf,
      rg,
      dataEmissaoRg,
      telefone,
      nomePet,
      especie,
      raca,
      sexo,
    });
  };

  function formatarData(data: Date): string {
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  return (
    <div>
      <Navbar />

      <h1 className="text-center mt-4" style={{ fontWeight: "bold" }}>
        Cadastro do Cliente
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center mt-5">
          <div className="me-5">
            <h6 className="text-center mb-4" style={{ fontWeight: "bold" }}>
              Dados do Cliente
            </h6>
            <div className="input-group mb-3">
              <span className="input-group-text">🐾</span>
              <input
                type="text"
                value={nome}
                onChange={handleNomeChange}
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
                value={nomeSocial}
                onChange={handleNomeSocialChange}
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
                value={cpf}
                onChange={handleCpfChange}
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
                onChange={handleDataEmissaoCpfChange}
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
                value={telefone}
                onChange={handleTelefoneChange}
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
                value={rg}
                onChange={handleRgChange}
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
                onChange={handleDataEmissaoRgChange}
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
                <h6 className="text-center mb-4" style={{ fontWeight: "bold" }}>
                  Dados do Pet
                </h6>
              </div>
              <div className="input-group mb-3" style={{ marginTop: "-16px" }}>
                <span className="input-group-text">🐾</span>
                <input
                  type="text"
                  value={nomePet}
                  onChange={handleNomePetChange}
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
                  aria-label="Raça "
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
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button
            type="submit"
            className="btn btn-info btn-purple me-2"
            style={{
              backgroundColor: "#483d8b",
              color: "white",
              borderColor: "purple",
              width: "100px",
            }}
          >
            Cadastrar
          </button>
        </div>
      </form>
      <WhatsAppLogo />
    </div>
  );
}
