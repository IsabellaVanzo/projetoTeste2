import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import CadastroLogin from "./Pages/CadastroLogin";
import CadastroClientes from "./Pages/CadastroClientes";
import ControleEstoque from "./Pages/ControleEstoque";
import HistoricoClientes from "./Pages/HistoricoClientes";
import CadastroFornecedores from "./Pages/CadastroFornecedores";
import CadastroFuncionarios from "./Pages/CadastroFuncionarios";
import CadastroProdutos from "./Pages/CadastroProdutos";
import ContasAPagar from "./Pages/ContasAPagar";
import ContasAReceber from "./Pages/ContasAReceber";
import RegistroVendas from "./Pages/RegistroVendas";
import DashboardListaLogin from "./Pages/ListaLogin";

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/cadastroLogin" element={<CadastroLogin />} />
        <Route path="/cadastroClientes" element={<CadastroClientes />} />
        <Route path="/controleEstoque" element={<ControleEstoque />} />
        <Route path="/historicoClientes" element={<HistoricoClientes />} />
        <Route path="/cadastroFornecedores" element={<CadastroFornecedores />} />
        <Route path="/cadastroFuncionarios" element={<CadastroFuncionarios />} />
        <Route path="/cadastroProdutos" element={<CadastroProdutos />} />
        <Route path="/contasAPagar" element={<ContasAPagar />} />
        <Route path="/contasAReceber" element={<ContasAReceber />} />
        <Route path="/registroVendas" element={<RegistroVendas />} />
        <Route path="/listaLogin" element={<DashboardListaLogin />} />
      </Routes>
    </>
  );
};

export default Rotas;

