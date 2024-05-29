import React from 'react';

const RegistroVendasItem = ({ registroVendas, onDelete }) => {
  return (
    <tr>
      <td>{registroVendas.id}</td>
      <td>{registroVendas.nomeProduto}</td>
      <td>{registroVendas.dataHoraVenda}</td>
      <td>{registroVendas.itensVendidos}</td>
      <td>{registroVendas.totalVenda}</td>
      <td>{registroVendas.metodoPagamento}</td>
      <td>{registroVendas.numeroFatura}</td>
      <td>{registroVendas.statusVenda}</td>
      <td>{registroVendas.observacoes}</td>
      <td>
        <button onClick={() => onDelete(registroVendas.id)}>Excluir</button>
      </td>
    </tr>
  );
};

export default RegistroVendasItem;
