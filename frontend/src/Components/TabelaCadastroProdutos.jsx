import React, { useState, useEffect } from "react";
import axios from "axios";

const TabelaCadastroProdutos = () => {
  const [cadastroProdutos, setcadastroProdutos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/cadastroProdutos");
        setcadastroProdutos(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/cadastroProdutos/${id}`);
      // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get("http://localhost:3001/cadastroProdutos");
      setcadastroProdutos(data);
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
            <th>Nome</th>
            <th>Categoria</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Ação</th>
            {/* Adicione mais colunas, se necessário */}
          </tr>
        </thead>
        <tbody>
          {cadastroProdutos.map((cadastroProdutos) => (
            <tr key={cadastroProdutos.idCadastroProdutos}>
              <td>{cadastroProdutos.idCadastroProdutos}</td>
              <td>{cadastroProdutos.nome}</td>
              <td>{cadastroProdutos.categoria}</td>
              <td>{cadastroProdutos.descricao}</td>
              <td>{cadastroProdutos.preco}</td>
              <td>{cadastroProdutos.quantidade}</td>
              <td>
                <button
                  variant="danger"
                  onClick={() => handleExcluirUsuario(cadastroProdutos.idCadastroProdutos)}
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

export default TabelaCadastroProdutos;