
import React from 'react';

const CadastroLoginItem = ({ cadastroLogin, onDelete }) => {
  return (
    <tr>
      <td>{cadastroLogin.id}</td>
      <td>{cadastroLogin.usuario}</td>
      <td>{cadastroLogin.email}</td>
      <td>{cadastroLogin.senha}</td>
      <td>{cadastroLogin.idCadastroFuncionarios}</td>
      <td>
        <button onClick={() => onDelete(cadastroLogin.id)}>Excluir</button>
      </td>
    </tr>

  );
};

export default CadastroLoginItem;

