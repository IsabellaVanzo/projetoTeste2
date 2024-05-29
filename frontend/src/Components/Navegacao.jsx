import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/"></Link>
          </li>
          <li>
            <Link to="/dashboard"></Link>
          </li>
          <li>
            <Link to="/cadastroLogin"></Link>
          </li>
          <li>
            <Link to="/cadastroProdutos"></Link>
          </li>
          <li>
            <Link to="/cadastroFornecedores"></Link>
          </li>
          <li>
            <Link to="/cadastroClientes"></Link>
          </li>
          <li>
            <Link to="/historicoClientes"></Link>
          </li>
          <li>
            <Link to="/controleEstoque"></Link>
          </li>
          <li>
            <Link to="/registroVendas"></Link>
          </li>
          <li>
            <Link to="/cadastroFuncionarios"></Link>
          </li>
          <li>
            <Link to="/contasAPagar"></Link>
          </li>
          <li>
            <Link to="/contasAReceber"></Link>
          </li>
          <li>
            <Link to="/listaLogin"></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
