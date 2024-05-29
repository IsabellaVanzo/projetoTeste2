import React, { useState, useEffect } from "react";
import axios from "axios";

const TabelaCadastroFornecedores = () => {
  const [cadastroFornecedores, setcadastroFornecedores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/cadastroFornecedores");
        setcadastroFornecedores(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/cadastroFornecedores/${id}`);
      // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get("http://localhost:3001/cadastroFornecedores");
      setcadastroFornecedores(data);
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
            <th>Nome de Empresa</th>
            <th>Estado</th>
            <th>CNPJ</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Segmento de Atuação</th>
            <th>Status</th>
            <th>Ação</th>
            {/* Adicione mais colunas, se necessário */}
          </tr>
        </thead>
        <tbody>
          {cadastroFornecedores.map((cadastroFornecedores) => (
            <tr key={cadastroFornecedores.idCadastroFornecedores}>
              <td>{cadastroFornecedores.idCadastroFornecedores}</td>
              <td>{cadastroFornecedores.nomeEmpresa}</td>
              <td>{cadastroFornecedores.estado}</td>
              <td>{cadastroFornecedores.cnpj}</td>
              <td>{cadastroFornecedores.email}</td>
              <td>{cadastroFornecedores.telefone}</td>
              <td>{cadastroFornecedores.segmentoAtuacao}</td>
              <td>{cadastroFornecedores.status}</td>
              <td>
                <button
                  variant="danger"
                  onClick={() => handleExcluirUsuario(cadastroFornecedores.idCadastroFornecedores)}
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

export default TabelaCadastroFornecedores;