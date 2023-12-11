import Navbar from "../elementos/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Component } from "react";
import WhatsAppLogo from "../../routes/logo";

function ProdutoListarTabela() {
  return (
    <div>
      <Navbar />

    
        <div>
        <h1 className="text-center mt-4" style={{ fontWeight: 'bold' }}>Registro de produtos</h1>
        </div>
        <div style={{marginTop: "100px", width: "1000px", marginLeft: "250px", borderRadius: "50px"}}>
          <table className="table table-hover table-bordered mt-5">
            <thead>
              <tr>
                <th scope="col">Posição</th>
                <th scope="col">Nome</th>
                <th scope="col">Valor</th>
                <th scope="col">Quantidade</th>
                
              </tr>
            </thead>
            <tbody className="table-group-divider">
              <tr>
                <th scope="row">1</th>
                <td>ração</td>
                <td>R$50,00</td>
                <td>200</td>
               
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>coleira</td>
                <td>R$25,00</td>
                <td>270</td>
               
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>brinquedo</td>
                <td>R$34,00</td>
                <td>2</td>
                
              </tr>

              <tr>
                <th scope="row">4</th>
                <td>sachê</td>
                <td>R$14,00</td>
                <td>50</td>
                
              </tr>

              <tr>
                <th scope="row">5</th>
                <td>areia de gato</td>
                <td>R$60,00</td>
                <td>50</td>
                
              </tr>

              <tr>
                <th scope="row">6</th>
                <td>antipulgas</td>
                <td>R$44,00</td>
                <td>70</td>
                
              </tr>

              <tr>
                <th scope="row">7</th>
                <td>casinha</td>
                <td>R$220,00</td>
                <td>30</td>
                
              </tr>
            </tbody>
          </table>
        </div>
        <WhatsAppLogo />
      </div>
    
  );
}

export default ProdutoListarTabela;