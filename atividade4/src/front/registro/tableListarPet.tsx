import Navbar from "../elementos/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Component } from "react";
import WhatsAppLogo from "../../routes/logo";

function PetListarTabela() {
  return (
    <div>
      <Navbar />

    
        <div>
        <h1 className="text-center mt-4" style={{ fontWeight: 'bold' }}>Registro de pets</h1>
        </div>
        <div style={{marginTop: "100px", width: "1000px", marginLeft: "250px", borderRadius: "50px"}}>
          <table className="table table-hover table-bordered mt-5">
            <thead>
              <tr>
                <th scope="col">Posição</th>
                <th scope="col">Nome</th>
                <th scope="col">Espécie</th>
                <th scope="col">Raça</th>
                <th scope="col">Responsável</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              <tr>
                <th scope="row">1</th>
                <td>Cleo</td>
                <td>Canina</td>
                <td>Doggo Argentino</td>
                <td>Antonieta de Morais</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Marrie</td>
                <td>Felina</td>
                <td>Siamês</td>
                <td>Rui Barbosa</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Jiló</td>
                <td>Canina</td>
                <td>SRD</td>
                <td>Taty Quebra-Barraco</td>
              </tr>
            </tbody>
          </table>
        </div>
        <WhatsAppLogo />
      </div>
    
  );
}

export default PetListarTabela;