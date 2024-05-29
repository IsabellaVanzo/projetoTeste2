import React from 'react';

const CadastroFornecedoresItem = ({ cadastroFornecedores, onDelete }) => {
  return (
    <tr>
      <td>{cadastroFornecedores.id}</td>
      <td>{cadastroFornecedores.nomeEmpresa}</td>
      <td>{cadastroFornecedores.estado}</td>
      <td>{cadastroFornecedores.cnpj}</td>
      <td>{cadastroFornecedores.email}</td>
      <td>{cadastroFornecedores.telefone}</td>
      <td>{cadastroFornecedores.segmentoAtuacao}</td>
      <td>{cadastroFornecedores.status}</td>
      <td>
        <button onClick={() => onDelete(cadastroFornecedores.id)}>Excluir</button>
      </td>
    </tr>
  );
};

export default CadastroFornecedoresItem;
