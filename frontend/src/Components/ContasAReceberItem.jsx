import React from 'react';

const ContasAReceberItem = ({ contasAReceber, onDelete }) => {
  return (
    <tr>
      <td>{contasAReceber.id}</td>
      <td>{contasAReceber.nomeEmpresa}</td>
      <td>{contasAReceber.estado}</td>
      <td>{contasAReceber.cnpj}</td>
      <td>{contasAReceber.email}</td>
      <td>
        <button onClick={() => onDelete(contasAReceber.id)}>Excluir</button>
      </td>
    </tr>
  );
};

export default ContasAReceberItem;
