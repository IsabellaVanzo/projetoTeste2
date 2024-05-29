import React, { useState, useEffect } from "react";
import axios from "axios";

const TabelaCadastroFuncionarios = () => {
  const [cadastroFuncionarios, setcadastroFuncionarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/cadastroFuncionarios");
        setcadastroFuncionarios(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/cadastroFuncionarios/${id}`);
      // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get("http://localhost:3001/cadastroFuncionarios");
      setcadastroFuncionarios(data);
      console.log("Usuário excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
  };

  return (
    <div  className="scrollbar" style={{ overflowX: "auto", height: "230px" }}>
      <table className="funcionarios table" border={2} cellPadding={5} cellSpacing={5}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Data de Nascimento</th>
            <th>Gênero</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>CPF</th>
            <th>Data de Cadastro</th>
            <th>Cidade</th>
            <th>CEP</th>
            <th>Cargo</th>
            <th>Departamento</th>
            <th>Data de Admissão</th>
            <th>Salário</th>
            <th>Ação</th>
            {/* Adicione mais colunas, se necessário */}
          </tr>
        </thead>
        <tbody>
          {cadastroFuncionarios.map((cadastroFuncionarios) => (
            <tr key={cadastroFuncionarios.idCadastroFuncionarios}>
              <td>{cadastroFuncionarios.idCadastroFuncionarios}</td>
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
                <button
                  variant="danger"
                  onClick={() => handleExcluirUsuario(cadastroFuncionarios.idCadastroFuncionarios)}
                >
                  Excluir
                </button>
              </td>
              {/* Renderizar outras colunas, se necessário */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaCadastroFuncionarios;