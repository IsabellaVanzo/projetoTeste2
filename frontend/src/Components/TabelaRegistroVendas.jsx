import React, { useState, useEffect } from "react";
import axios from "axios";

const TabelaRegistroVendas = () => {
  const [registroVendas, setRegistroVendas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/registroVendas");
        setRegistroVendas(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/registroVendas/${id}`);
      // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get("http://localhost:3001/registroVendas");
      setRegistroVendas(data);
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
            <th>Nome do Produto</th>
            <th>Data e Hora da Venda</th>
            <th>Itens Vendidos</th>
            <th>Total da Venda</th>
            <th>Método de Pagamento</th>
            <th>Número de Fatura</th>
            <th>Status da Venda</th>
            <th>Observações</th>
            <th>Ação</th>
            {/* Adicione mais colunas, se necessário */}
          </tr>
        </thead>
        <tbody>
          {registroVendas.map((registroVendas) => (
            <tr key={registroVendas.idRegistroVendas}>
              <td>{registroVendas.idRegistroVendas}</td>
              <td>{registroVendas.nomeProduto}</td>
              <td>{registroVendas.dataHoraVenda}</td>
              <td>{registroVendas.itensVendidos}</td>
              <td>{registroVendas.totalVenda}</td>
              <td>{registroVendas.metodoPagamento}</td>
              <td>{registroVendas.numeroFatura}</td>
              <td>{registroVendas.statusVenda}</td>
              <td>{registroVendas.observacoes}</td>
              <td>
                <button
                  variant="danger"
                  onClick={() => handleExcluirUsuario(registroVendas.idRegistroVendas)}
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

export default TabelaRegistroVendas;