import React from 'react';

const CadastroFuncionariosItem = ({ cadastroFuncionarios, onDelete }) => {
  return (
    <tr>
      <td>{cadastroFuncionarios.id}</td>
      <td>{cadastroFuncionarios.nome}</td>
      <td>{cadastroFuncionarios.sobrenome}</td>
      <td>{cadastroFuncionarios.dataNascimento}</td>
      <td>{cadastroFuncionarios.genero}</td>
      <td>{cadastroFuncionarios.email}</td>
      <td>{cadastroFuncionarios.telefone}</td>
      <td>{cadastroFuncionarios.cpf}</td>
      <td>{cadastroFuncionarios.dataCadastro}</td>
      <td>{cadastroFuncionarios.cidade}</td>
      <td>{cadastroFuncionarios.cep}</td>
      <td>{cadastroFuncionarios.cargo}</td>
      <td>{cadastroFuncionarios.departamento}</td>
      <td>{cadastroFuncionarios.dataAdmissao}</td>
      <td>{cadastroFuncionarios.salario}</td>
      <td>
        <button onClick={() => onDelete(cadastroFuncionarios.id)}>Excluir</button>
      </td>
    </tr>
  );
};

export default CadastroFuncionariosItem;
