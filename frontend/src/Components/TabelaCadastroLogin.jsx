import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TabelaCadastroLogin = () => {
  const [cadastroLogin, setcadastroLogin] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/cadastroLogin");
        setcadastroLogin(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/cadastroLogin/${id}`);
      // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get("http://localhost:3001/cadastroLogin");
      setcadastroLogin(data);
      console.log("Usuário excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
  };

  return (
    <div>
      <table border={2} cellPadding={5} cellSpacing={5}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuário</th>
            <th>Email</th>
            <th>Senha</th>
            <th>Id de cadastro do funcionário</th>
            <th>Ação</th>
            {/* Adicione mais colunas, se necessário */}
          </tr>
        </thead>
        <tbody>
          {cadastroLogin.map((cadastroLogin) => (
            <tr key={cadastroLogin.id}>
              <td>{cadastroLogin.id}</td>
              <td>{cadastroLogin.usuario}</td>
              <td>{cadastroLogin.email}</td>
              <td>{cadastroLogin.senha}</td>
              <td>{cadastroLogin.idCadastroFuncionarios}</td>
              <td>
                <button
                  variant="danger"
                  onClick={() => handleExcluirUsuario(cadastroLogin.id)}
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
export default TabelaCadastroLogin;
