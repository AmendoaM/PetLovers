import React, { useState } from "react";
import Navbar from "../elementos/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import WhatsAppLogo from "../../routes/logo";

export default function ConsumirServico() {

  const [cpf, setCpf] = useState("");
  const [servicosSelecionados, setServicosSelecionados] = useState(
    new Array(6).fill(false)
  );

  const servicos = [
    { nome: "lar temporário", valor: 45 },
    { nome: "passeio", valor: 89 },
    { nome: "tosa", valor: 35 },
    { nome: "corte de unha", valor: 25 },
    { nome: "creche", valor: 80 },
    { nome: "banho", valor: 80 },
  ];

  const handleCPFChange = (e: any) => {
    setCpf(e.target.value);
  };

  const handleCheckboxChange = (index: any) => {
    const updatedServicos = [...servicosSelecionados];
    updatedServicos[index] = !updatedServicos[index];
    setServicosSelecionados(updatedServicos);
  };

  const handleComprarClick = () => {
    const servicosComprados = servicos
      .filter((servico, index) => servicosSelecionados[index])
      .map((servico) => ({
        nome: servico.nome,
        valor: servico.valor,
      }));

    console.log("CPF:", cpf);
    console.log("Serviços Selecionados:", servicosComprados);
  };

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
            value={cpf}
            onChange={handleCPFChange}
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
              {servicos.map((servico, index) => (
                <tr key={index}>
                  <th scope="row">
                    <input
                      className="form-check-input mt-0"
                      type="checkbox"
                      value=""
                      aria-label="Checkbox for following text input"
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </th>
                  <td>{servico.nome}</td>
                  <td>{`R$${servico.valor.toFixed(2)}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <button
            type="button"
            className="btn btn-info btn-purple me-2"
            style={{ backgroundColor: " #483d8b", color: "white", borderColor: "purple", width: "100px" }}
            onClick={handleComprarClick}
          >
            Comprar
          </button>
        </div>
      </div>
      <WhatsAppLogo />
    </div>
  );
}
