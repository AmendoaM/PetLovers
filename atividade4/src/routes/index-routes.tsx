import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClienteFormCadastro from "../front/cadastro/formCadastroCliente";
import PetCadastroForm from "../front/cadastro/formCadastroPet";
import ProdutoFormCadastro from "../front/cadastro/formCadastroProduto";
import ServicoFormCadastro from "../front/cadastro/formCadastroServico";
import ClienteListarTabela from "../front/registro/tableListarCliente";
import PetListarTabela from "../front/registro/tableListarPet";
import ProdutoListarTabela from "../front/registro/tableListarProduto";
import ServicoListarTabela from "../front/registro/tableListarServico";
import ServicosMaisConsumidosTabela from "../front/serviços/informações/servicoMaisConsumido";
import ProdutosMaisConsumidosTabela from "../front/produtos/informações/produtoMaisConsumido";
import TelefoneCadastroForm from "../front/cadastro/formCadastroTelefone";

import ComprarProduto from "../front/produtos/produtoConsumo";

import RgCadastroForm from "../front/cadastro/formCadastroRg";
import ConsumirServico from "../front/serviços/servicoConsumo";
export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClienteFormCadastro />} />
      </Routes>

      <Routes>
        <Route path="/PetCadastroForm" element={<PetCadastroForm />} />
      </Routes>

      <Routes>
        <Route path="/ProdutoFormCadastro" element={<ProdutoFormCadastro />} />
      </Routes>

      <Routes>
        <Route path="/ServicoFormCadastro" element={<ServicoFormCadastro />} />
      </Routes>

      <Routes>
        <Route path="/ClienteListarTabela" element={<ClienteListarTabela tema={""} seletorView={()=> {return}} id={0}/>} />
      </Routes>
      <Routes>
        <Route path="/PetListarTabela" element={<PetListarTabela />} />
      </Routes>
      <Routes>
        <Route path="/ProdutoListarTabela" element={<ProdutoListarTabela />} />
      </Routes>
      <Routes>
        <Route path="/ServicoListarTabela" element={<ServicoListarTabela />} />
      </Routes>
      
      <Routes>
        <Route path="/ServicosMaisConsumidosTabela" element={<ServicosMaisConsumidosTabela />} />
      </Routes>
      <Routes>
        <Route path="/ProdutosMaisConsumidosTabela" element={<ProdutosMaisConsumidosTabela />} />
      </Routes>
      <Routes>
        <Route path="/TelefoneCadastroForm" element={<TelefoneCadastroForm />} />
      </Routes>

      <Routes>
        <Route path="/RgCadastroForm" element={<RgCadastroForm />} />
      </Routes>

      <Routes>
        <Route path="/ComprarProduto" element={<ComprarProduto />} />
      </Routes>

      <Routes>
        <Route path="/ConsumirServico" element={<ConsumirServico />} />
      </Routes>
    </BrowserRouter>
  );
};
