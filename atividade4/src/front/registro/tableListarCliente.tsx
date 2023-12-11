import Navbar from "../elementos/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Component, useEffect, useState } from "react";
import WhatsAppLogo from "../../routes/logo";
import cliente, { Cliente } from "../../modelo/cliente";
import criarTelefone, { Telefone } from "../../modelo/telefone";
import { useNavigate } from "react-router-dom";

type props = {
  tema: string;
  seletorView: Function;
  id: number;
};

function ClienteListarTabela(props: props) {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [telefone, setTelefone] = useState(criarTelefone('12', '91234567'))
  const navigate = useNavigate();

  const deletar = async (e: any, clienteItem: Cliente) => {
    try {
      const response = await fetch(`http://localhost:32831/cliente/excluir`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(clienteItem),
      });
    } catch (error: any) {
      console.log(error.message);
    }
    // eslint-disable-next-line no-restricted-globals
    location.reload()
  };

  const editar = async (e: any, clienteItem:Cliente) => {
    try {
        const response = await fetch(`http://localhost:32831/cliente/atualizar`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(clienteItem),
        });
        if (response.ok) {
            console.log("Cliente editado com sucesso!");
        } else {
            throw new Error("Erro ao editar cliente");
        }
    } catch (error: any) {
        console.log(error.message)
    }
    // eslint-disable-next-line no-restricted-globals
    location.reload()
}

  const getClientes = async () => {
    try {
      const response = await fetch(`http://localhost:32831/cliente/clientes`);
      const jsonData = await response.json();
      setClientes(jsonData);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const adicionarCliente = () => {
    navigate("/");
  }

  useEffect(() => {
    getClientes();
  }, []);

  const handleInputChange = (e: any, clienteItem:Cliente) => {
    clienteItem.nome = e.target.value
  };

  return (
    <div>
      <Navbar />

      <div>
        <h1 className="text-center mt-4" style={{ fontWeight: "bold" }}>
          Registro de Clientes
        </h1>
      </div>
      <div style={{ marginTop: "100px", width: "1000px", marginLeft: "250px", borderRadius: "50px" }}>
        <table className="table table-hover table-bordered mt-5 border border-primary-subtle rounded-2">
          <thead>
            <tr>
              <th scope="col">Posição</th>
              <th scope="col">
                <div style={{ textAlign: "center" }}>Nome</div>
              </th>
              <th scope="col">
                <div style={{ textAlign: "center" }}>CPF</div>
              </th>
              <th scope="col">
                <div style={{ textAlign: "center" }}>RG</div>
              </th>
              <th scope="col">
                <div style={{ textAlign: "center" }}>Telefone</div>
              </th>
              <th scope="col">
                <div style={{ textAlign: "center" }}>Opções</div>
              </th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {clientes.map((clienteItem: any) => {
              return (
                <tr>
                  <th scope="row">{clienteItem.id}</th>
                  <td>
                  <form> 
                    
                    <input
                      type="text"
                      defaultValue={clienteItem.nome}
                      onChange={(e) => handleInputChange(e,clienteItem)}
                      name="nome"
                      className="form-control larger-input"
                      placeholder="Nome"
                      aria-label="Nome"
                      aria-describedby="basic-addon1"
                      style={{ width: "500px" }}
                    />
                    </form>
                  </td>
                  {/* <td>{clienteItem.nome}</td> */}
                  <td>{444}</td>
                  <td>{555}</td>
                  <td>{9999}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-info btn-purple me-2"
                      style={{ backgroundColor: " #483d8b", color: "white", borderColor: "purple", width: "150px" }}
                      onClick={(e) => editar(e, clienteItem)}
                    >
                      Editar cliente
                    </button>
                    <button
                      type="button"
                      className="btn btn-info btn-purple me-2"
                      style={{ backgroundColor: " #483d8b", color: "white", borderColor: "purple", width: "150px" }}
                      onClick={(e) => deletar(e, clienteItem)}
                    >
                      Excluir cliente
                    </button>
                  </td>
                </tr>
              );
            })}

            {/* <tr>
              <th scope="row">2</th>
              <td>Pablo Escobar</td>
              <td>444.555.777-88</td>
              <td>44.553.757-85</td>
              <td>(12) 9887-33457</td>
              <td><button
                  type="button"
                  className="btn btn-info btn-purple me-2"
                  style={{ backgroundColor: " #483d8b", color: "white", borderColor: "purple", width: "150px" }}
                >
                  Editar cliente
                </button>
                <button
                  type="button"
                  className="btn btn-info btn-purple me-2"
                  style={{ backgroundColor: " #483d8b", color: "white", borderColor: "purple", width: "150px" }}
                >
                  Excluir cliente
                </button></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Anastasia Romanov</td>
              <td>222.333.333-44</td>
              <td>22.363.393-40</td>
              <td>(12) 9889-00498</td>
              <td><button
                  type="button"
                  className="btn btn-info btn-purple me-2"
                  style={{ backgroundColor: " #483d8b", color: "white", borderColor: "purple", width: "150px" }}
                >
                  Editar cliente
                </button>
                <button
                  type="button"
                  className="btn btn-info btn-purple me-2"
                  style={{ backgroundColor: " #483d8b", color: "white", borderColor: "purple", width: "150px" }}
                >
                  Excluir cliente
                </button></td>
            </tr> */}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button
          type="button"
          className="btn btn-info btn-purple me-2"
          style={{ backgroundColor: " #483d8b", color: "white", borderColor: "purple", width: "150px" }}
          onClick={adicionarCliente}
        >
          Adicionar cliente
        </button>
      </div>
      <WhatsAppLogo />
    </div>
  );
}

export default ClienteListarTabela;
