import React, { useState, useEffect } from "react";
import axios from "axios";

const TabelaContasAPagar = () => {
  const [contasAPagar, setcontasAPagar] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/contasAPagar");
        setcontasAPagar(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/contasAPagar/${id}`);
      // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get("http://localhost:3001/contasAPagar");
      setcontasAPagar(data);
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
          {contasAPagar.map((contasAPagar) => (
            <tr key={contasAPagar.idContasAPagar}>
              <td>{contasAPagar.idContasAPagar}</td>
              <td>{contasAPagar.descricao}</td>
              <td>{contasAPagar.valor}</td>
              <td>{contasAPagar.dataVencimento}</td>
              <td>{contasAPagar.status}</td>
              <td>
                <button
                  variant="danger"
                  onClick={() => handleExcluirUsuario(contasAPagar.idContasAPagar)}
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

export default TabelaContasAPagar;