import React, { useState, useEffect } from "react";
import axios from "axios";

const TabelaContasAReceber = () => {
  const [contasAReceber, setcontasAReceber] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3001/contasAReceber"
        );
        setcontasAReceber(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/contasAReceber/${id}`);
      // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get("http://localhost:3001/contasAReceber");
      setcontasAReceber(data);
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
            <th>Descrição</th>
            <th>Valor</th>
            <th>Data de Vencimento</th>
            <th>Status</th>
            <th>Ação</th>
            {/* Adicione mais colunas, se necessário */}
          </tr>
        </thead>
        <tbody>
          {contasAReceber.map((contasAReceber) => (
            <tr key={contasAReceber.idContasAReceber}>
              <td>{contasAReceber.idContasAReceber}</td>
              <td>{contasAReceber.descricao}</td>
              <td>{contasAReceber.valor}</td>
              <td>{contasAReceber.dataVencimento}</td>
              <td>{contasAReceber.status}</td>
              <td>
                <button
                  variant="danger"
                  onClick={() =>
                    handleExcluirUsuario(contasAReceber.idContasAReceber)
                  }
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

export default TabelaContasAReceber;
