import React, { useState, useEffect } from "react";
import axios from "axios";
import '../css/modal.css'
const TabelaCadasClientes = () => {
  const [cadastroClientes, setcadastroClientes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/cadastroClientes");
        setcadastroClientes(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Adiciona este log de erro
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/cadastroClientes/${id}`);
      // Atualiza a lista de cadastros após a exclusão
      const { data } = await axios.get("http://localhost:3001/cadastroClientes");
      setcadastroClientes(data);
      console.log("Usuário excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
  };

  return (
    <div className="scrollbar" style={{ overflowX: "auto", height: "180px" }} >
      <table className="clientestable" border={2} cellPadding={2} cellSpacing={4}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Data de Nascimento</th>
            <th>Gênero</th>
            <th>Endereço</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>CPF</th>
            <th>Data de Cadastro</th>
            <th>Ação</th>
            {/* Adicione mais colunas, se necessário */}
          </tr>
        </thead>
        <tbody>
          {cadastroClientes.map((cadastroClientes) => (
            <tr key={cadastroClientes.idCadastroClientes}>
              <td>{cadastroClientes.idCadastroClientes}</td>
              <td>{cadastroClientes.nome}</td>
              <td>{cadastroClientes.sobrenome}</td>
              <td>{cadastroClientes.dataNascimento}</td>
              <td>{cadastroClientes.genero}</td>         
              <td>{cadastroClientes.endereco}</td>
              <td>{cadastroClientes.email}</td>
              <td>{cadastroClientes.telefone}</td>
              <td>{cadastroClientes.cpf}</td>
              <td>{cadastroClientes.dataCadastro}</td>
              <td>
                <button
                  variant="danger"
                  onClick={() => handleExcluirUsuario(cadastroClientes.idCadastroClientes)}
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

export default TabelaCadasClientes;