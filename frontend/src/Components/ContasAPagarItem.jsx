import React from 'react';

const ContasAPagarItem = ({ contasAPagar, onDelete }) => {
  return (
    <tr>
      <td>{contasAPagar.id}</td>
      <td>{contasAPagar.nomeEmpresa}</td>
      <td>{contasAPagar.estado}</td>
      <td>{contasAPagar.cnpj}</td>
      <td>{contasAPagar.email}</td>
      <td>
        <button onClick={() => onDelete(contasAPagar.id)}>Excluir</button>
      </td>
    </tr>
  );
};

export default ContasAPagarItem;
