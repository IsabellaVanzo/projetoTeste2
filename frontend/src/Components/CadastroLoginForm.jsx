import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const CadastroLoginForm = () => {
  const [formData, setFormData] = useState({
    usuario: '',
    email: '',
    senha: '',
    idCadastroFuncionarios: ''
  });

  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    const fetchFuncionarios = async () => {
      try {
        const response = await axios.get('http://localhost:3001/cadastroFuncionarios');
        setFuncionarios(response.data);
      } catch (error) {
        console.error('Erro ao buscar funcionários:', error);
      }
    };

    fetchFuncionarios();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/cadastroLogin', formData);
      await Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Contas a Receber criado com sucesso!'
      });
      setFormData({
        usuario: '',
        email: '',
        senha: '',
        idCadastroFuncionarios: ''
      });
      window.location.reload(false);
    } catch (error) {
      console.error('Erro ao criar cadastro de login:', error);
      await Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Erro ao criar contasAReceber. Verifique o console para mais detalhes.'
      });
    }
  };

  return (
    <form className='cadastroLoginForm' onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="usuario" className="form-label">Usuário:</label>
        <input type="text" name="usuario" id="usuario" className="form-control" placeholder="Usuário" value={formData.usuario} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="text" name="email" id="email" className="form-control" placeholder="Email" value={formData.email} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="senha" className="form-label">Senha:</label>
        <input type="password" name="senha" id="senha" className="form-control" placeholder="Senha" value={formData.senha} onChange={handleChange} />
      </div>

      {/* Campo de seleção para selecionar o funcionário */}
      <div className="form-group">
        <label htmlFor="idCadastroFuncionarios" className="form-label">Funcionário:</label>
        <select name="idCadastroFuncionarios" id="idCadastroFuncionarios" className="form-select" value={formData.idCadastroFuncionarios} onChange={handleChange}>
          <option value="">Selecione um funcionário</option>
          {funcionarios.map(funcionario => (
            <option key={funcionario.idCadastroFuncionarios} value={funcionario.idCadastroFuncionarios}>
              {funcionario.nome} {funcionario.sobrenome}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="form-button">Salvar</button>
    </form>
  );
};

export default CadastroLoginForm;


