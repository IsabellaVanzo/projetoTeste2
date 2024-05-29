import React, { useState, useEffect } from "react";
import axios from "axios";

const TabelaControleEstoque = () => {
  const [controleEstoque, setcontroleEstoque] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/controleEstoque");
        setcontroleEstoque(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/controleEstoque/${id}`);
      // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get("http://localhost:3001/historicoClientes");
      setcontroleEstoque(data);
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
            <th> Quantidade:</th>
            <th>Data da Entrada:</th>
            <th>Data da Saída:</th> 
            <th>Id do produto: </th>
            <th>Ação</th>
            {/* Adicione mais colunas, se necessário */}
          </tr>
        </thead>
        <tbody>
          {controleEstoque.map((controleEstoque) => (
            <tr key={controleEstoque.id}>
              <td>{controleEstoque.id}</td>
              <td>{controleEstoque.quantidade}</td>
              <td>{controleEstoque.dataEntrada}</td>
              <td>{controleEstoque.dataSaida}</td>
              <td>{controleEstoque.idCadastroProdutos}</td>
              <td>
                <button
                  variant="danger"
                  onClick={() => handleExcluirUsuario(controleEstoque.id)}
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

export default TabelaControleEstoque;