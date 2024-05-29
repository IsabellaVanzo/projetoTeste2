// CadastroClientesForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const CadastroClientesForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    dataNascimento: '',
    genero: '',
    endereco: '',
    email: '',
    telefone: '',
    cpf: '',
    dataCadastro: ''
  });

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
      await axios.post('http://localhost:3001/cadastroClientes', formData);
      await Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Contas a Receber criado com sucesso!'
      });
      setFormData({
        nome: '',
        sobrenome: '',
        dataNascimento: '',
        genero: '',
        endereco: '',
        email: '',
        telefone: '',
        cpf: '',
        dataCadastro: ''
      });
      window.location.reload(false);
    } catch (error) {
      console.error('Erro ao criar cadastroClientes ', error);
      await Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Erro ao criar contasAReceber. Verifique o console para mais detalhes.'
      });
    }
  };

  return (
    <form className='clientesform' onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="nome">Nome:</label>
    <input type="text" name="nome" id="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
  </div>
  <div className="form-group">
    <label htmlFor="sobrenome">Sobrenome:</label>
    <input type="text" name="sobrenome" id="sobrenome" placeholder="Sobrenome" value={formData.sobrenome} onChange={handleChange} />
  </div>
  <div className="form-group">
    <label htmlFor="dataNascimento">Data de Nascimento:</label>
    <input type="date" name="dataNascimento" id="dataNascimento" value={formData.dataNascimento} onChange={handleChange} />
  </div>
  <div className="form-group">
    <label htmlFor="genero">Gênero:</label>
    <select name="genero" id="genero" value={formData.genero} onChange={handleChange}>
      <option value="">Selecione...</option>
      <option value="Masculino">Masculino</option>
      <option value="Feminino">Feminino</option>
      <option value="Outro">Outro</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="endereco">Endereço:</label>
    <input type="text" name="endereco" id="endereco" placeholder="Endereço" value={formData.endereco} onChange={handleChange} />
  </div>
  <div className="form-group">
    <label htmlFor="email">Email:</label>
    <input type="email" name="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} />
  </div>
  <div className="form-group">
    <label htmlFor="telefone">Telefone:</label>
    <input type="tel" name="telefone" id="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} />
  </div>
  <div className="form-group">
    <label htmlFor="cpf">CPF:</label>
    <input type="text" name="cpf" id="cpf" placeholder="CPF" value={formData.cpf} onChange={handleChange} />
  </div>
  <div className="form-group">
    <label htmlFor="dataCadastro">Data de Cadastro:</label>
    <input type="date" name="dataCadastro" id="dataCadastro" value={formData.dataCadastro} onChange={handleChange} />
  </div>
  <button type="submit" style={{ marginTop: "10px", padding: "8px 16px", background: "#007bff", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>Salvar</button>
</form>

  );
};

export default CadastroClientesForm;
