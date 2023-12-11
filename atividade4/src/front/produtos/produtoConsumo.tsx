import React, { useState } from "react";
import Navbar from "../elementos/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import WhatsAppLogo from "../../routes/logo";

export default function ComprarProduto() {
  const [cpf, setCpf] = useState("");
  const [produtosSelecionados, setProdutosSelecionados] = useState(
    new Array(6).fill(false)
  );

  const handleCPFChange = (e: any) => {
    setCpf(e.target.value);
  };

  const handleCheckboxChange = (index: any) => {
    const updatedProdutos = [...produtosSelecionados];
    updatedProdutos[index] = !updatedProdutos[index];
    setProdutosSelecionados(updatedProdutos);
  };

  const handleComprarClick = () => {
    const produtos = [
      { nome: "coleira", valor: 78 },
      { nome: "ração", valor: 120 },
      { nome: "sachê", valor: 40 },
      { nome: "brinquedo", valor: 20 },
      { nome: "areia de gato", valor: 60 },
      { nome: "bolinha de plástico", valor: 10 },
    ];

    const produtosComprados = produtos
      .filter((produto, index) => produtosSelecionados[index])
      .map((produto) => ({
        nome: produto.nome,
        valor: produto.valor,
      }));

    console.log("CPF:", cpf);
    console.log("Produtos Selecionados:", produtosComprados);
  };

  const produtos = [
    { nome: "coleira", valor: 78 },
    { nome: "ração", valor: 120 },
    { nome: "sachê", valor: 40 },
    { nome: "brinquedo", valor: 20 },
    { nome: "areia de gato", valor: 60 },
    { nome: "bolinha de plástico", valor: 10 },
  ];

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
              {produtos.map((produto, index) => (
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
                  <td>{produto.nome}</td>
                  <td>{`R$${produto.valor.toFixed(2)}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <button
            type="submit"
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
