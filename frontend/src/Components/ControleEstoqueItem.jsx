import React from 'react';

const ControleEstoqueItem = ({ controleEstoque, onDelete }) => {
  return (
    <tr>
      <td>{controleEstoque.id}</td>
      <td>{controleEstoque.quantidade}</td>
      <td>{controleEstoque.dataEntrada}</td>
      <td>{controleEstoque.dataSaida}</td>
      <td>{controleEstoque.idCadastroProdutos}</td>
      <td>
        <button onClick={() => onDelete(controleEstoque.id)}>Excluir</button>
      </td>
    </tr>
  );
};

export default ControleEstoqueItem;
