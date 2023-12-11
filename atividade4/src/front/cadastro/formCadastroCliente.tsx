import React, { useState } from "react";
import Navbar from "../elementos/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import WhatsAppLogo from "../../routes/logo";
import { Cliente } from "../../modelo/cliente";
import { useNavigate } from "react-router-dom";

export default function ClienteFormCadastro() {
  const navigate = useNavigate();
  const [cliente, setCliente] = useState({
    nome: "",
    nomeSocial: "",
    cpf: "",
    dataEmissaoCpf: new Date(),
    rg: "",
    dataEmissaoRg: new Date(),
    telefone: "",
    pets: [],
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setCliente((prevCliente) => ({
      ...prevCliente,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:32831/cliente/cadastrar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cliente),
      });
      if (response.ok) {
        console.log("Cliente cadastrado com sucesso!");
        navigate("/ClienteListarTabela");
      } else {
        throw new Error("Erro ao cadastrar cliente");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

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

  return (
    <div>
      <Navbar />

      <h1 className="text-center mt-4" style={{ fontWeight: "bold" }}>
        Cadastro do Cliente
      </h1>

      <form>
        <div className="d-flex justify-content-center mt-5">
          <div className="me-5">
            <h6 className="text-center mb-4" style={{ fontWeight: "bold" }}>
              Dados do Cliente
            </h6>
            <div className="input-group mb-3">
              <span className="input-group-text">🐾</span>
              <input
                type="text"
                value={cliente.nome}
                onChange={handleInputChange}
                name="nome"
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
                value={cliente.nomeSocial}
                onChange={handleInputChange}
                name="nomeSocial"
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
                value={cliente.cpf}
                onChange={handleInputChange}
                name="CPF"
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
                value={dataEmissaoCpf.toISOString().substring(0, 10)}
                onChange={handleInputChange}
                name="dataEmissaoCpf"
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
                onChange={handleInputChange}
                name="telefone"
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
                onChange={handleInputChange}
                name="rg"
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
                value={dataEmissaoRg.toISOString().substring(0, 10)}
                onChange={handleInputChange}
                name="dataEmissaoRg"
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
                  onChange={handleInputChange}
                  name="nomePet"
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
                  onChange={handleInputChange}
                  name="especie"
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
                  onChange={handleInputChange}
                  name="raca"
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
                  onChange={handleInputChange}
                  name="sexo"
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
            onClick={handleSubmit}
          >
            Cadastrar
          </button>
        </div>
      </form>
      <WhatsAppLogo />
    </div>
  );
}
