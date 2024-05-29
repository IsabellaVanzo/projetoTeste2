import React from 'react';

const CadastroClientesItem = ({ cadastroClientes, onDelete }) => {
  return (
    <tr>
      <td>{cadastroClientes.id}</td>
      <td>{cadastroClientes.nome}</td>
      <td>{cadastroClientes.sobrenome}</td>
      <td>{cadastroClientes.dataNascimento}</td>
      <td>{cadastroClientes.genero}</td>
      <td>{cadastroClientes.endereco}</td>
      <td>{cadastroClientes.email}</td>
      <td>{cadastroClientes.telefone}</td>
      <td>{cadastroClientes.cpf}</td>
      <td>{cadastroClientes.dataCadastro}</td>
      <td>
        <button onClick={() => onDelete(cadastroClientes.id)}>Excluir</button>
      </td>
    </tr>
  );
};

export default CadastroClientesItem;
