import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Component } from "react";
import "./petLovers.css";

export default class Navbar extends Component {
  componentDidMount() {
    const elements = document.querySelectorAll(".nav-link, .navbar-text");
    elements.forEach((element) => {
      (element as HTMLElement).style.color = "white";
      (element as HTMLElement).style.fontWeight = "bold";
      (element as HTMLElement).style.fontSize = "1.2rem";
    });

    const petLoversText = document.querySelector(".navbar-text");
    if (petLoversText) {
      (petLoversText as HTMLElement).style.color = "white";
      (petLoversText as HTMLElement).style.fontWeight = "bold";
      (petLoversText as HTMLElement).style.fontSize = "20rem";
    }
  }

  render() {
    const navbarStyle = {
      backgroundColor: "#854d8b",
    };

    const petLoversStyle = {
      color: "white",
      fontWeight: "bold",
      fontSize: "10rem",
    };

    return (
      <div>
        <nav className="navbar navbar-expand-lg" style={navbarStyle}>
          <div className="container-fluid">
            <span className="navbar-text mx-auto ms-5 p-3 fs-3" style={{ color: "white", display: "inline" }}>
              <img src="/paw.png" style={{ width: "20px", height: "20px", marginBottom: "5px" }} />
              PetLovers
            </span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle ms-5"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    cadastro
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        cliente
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/TelefoneCadastroForm">
                        telefone
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/PetCadastroForm">
                        pet
                      </a>
                    </li>
                    <li></li>
                    <li>
                      <a className="dropdown-item" href="/ProdutoFormCadastro">
                        produto
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/ServicoFormCadastro">
                        serviço
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/RgCadastroForm">
                        RG
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle ms-5"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    registro
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/ClienteListarTabela">
                        cliente
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/PetListarTabela">
                        pet
                      </a>
                    </li>
                    <li></li>
                    <li>
                      <a className="dropdown-item" href="/ProdutoListarTabela">
                        produto
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/ServicoListarTabela">
                        serviço
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle ms-5"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    produtos
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/comprarProduto">
                        ver mais
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/ProdutosMaisConsumidosTabela">
                        informações
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle ms-5"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    serviços
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/consumirServico">
                        ver mais
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/ServicosMaisConsumidosTabela">
                        informações
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
