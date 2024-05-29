import React from 'react';

const CadastroProdutosItem = ({ cadastroProdutos, onDelete }) => {
  return (
    <tr>
      <td>{cadastroProdutos.id}</td>
      <td>{cadastroProdutos.nome}</td>
      <td>{cadastroProdutos.categoria}</td>
      <td>{cadastroProdutos.descricao}</td>
      <td>{cadastroProdutos.preco}</td>
      <td>{cadastroProdutos.quantidade}</td>
      <td>
        <button onClick={() => onDelete(cadastroProdutos.id)}>Excluir</button>
      </td>
    </tr>
  );
};

export default CadastroProdutosItem;
