import React from 'react';

const HistoricoClientesItem = ({ historicoClientes, onDelete }) => {
  return (
    <tr>
      <td>{historicoClientes.id}</td>
      <td>{historicoClientes.nome}</td>
      <td>{historicoClientes.sobrenome}</td>
      <td>{historicoClientes.dataHora}</td>
      <td>{historicoClientes.tipoInteracao}</td>
      <td>{historicoClientes.resultadoInteracao}</td>
      <td>{historicoClientes.descricaoInteracao}</td>
      <td>{historicoClientes.idRegistroVendas}</td>
      <td>
        <button onClick={() => onDelete(historicoClientes.id)}>Excluir</button>
      </td>
    </tr>
  );
};

export default HistoricoClientesItem;
