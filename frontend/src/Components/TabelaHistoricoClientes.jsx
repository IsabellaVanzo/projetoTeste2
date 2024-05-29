import React, { useState, useEffect } from "react";
import axios from "axios";

const TabelaHistoricoClientes = () => {
  const [historicoClientes, sethistoricoClientes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/historicoClientes");
        sethistoricoClientes(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/historicoClientes/${id}`);
      // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get("http://localhost:3001/historicoClientes");
      sethistoricoClientes(data);
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
            <th>Nome:</th>
            <th>Sobrenome:</th>
            <th>Data da interação:</th>
            <th>Tipo de interação:</th>
            <th>Resultado da interação:</th>
            <th>Descrição da interação:</th>
            <th>Id da venda: </th>
            <th>Ação</th>
            {/* Adicione mais colunas, se necessário */}
          </tr>
        </thead>
        <tbody>
          {historicoClientes.map((historicoClientes) => (
            <tr key={historicoClientes.id}>
              <td>{historicoClientes.id}</td>
              <td>{historicoClientes.nome}</td>
              <td>{historicoClientes.sobrenome}</td>
              <td>{historicoClientes.dataHora}</td>
              <td>{historicoClientes.tipoInteracao}</td>
              <td>{historicoClientes.resultadoInteracao}</td>
              <td>{historicoClientes.descricaoInteracao}</td>
              <td>{historicoClientes.idregistroVendas}</td>
              <td>
                <button
                  variant="danger"
                  onClick={() => handleExcluirUsuario(historicoClientes.id)}
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

export default TabelaHistoricoClientes;