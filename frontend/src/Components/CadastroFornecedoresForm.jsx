import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


const CadastroFornecedoresForm = () => {
  const [formData, setFormData] = useState({
    nomeEmpresa: '',
    estado: '',
    cnpj: '',
    email: '',
    telefone: '',
    segmentoAtuacao: '',
    status: ''
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
      await axios.post('http://localhost:3001/cadastroFornecedores', formData);
      await Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Fornecedor cadastrado com sucesso!'
      });
      setFormData({
        nomeEmpresa: '',
        estado: '',
        cnpj: '',
        email: '',
        telefone: '',
        segmentoAtuacao: '',
        status: ''
      });
      window.location.reload(false);
    } catch (error) {
      console.error('Erro ao criar cadastroFornecedores', error);
      await Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Erro ao cadastrar fornecedor. Verifique o console para mais detalhes.'
      });
    }
  };

  return (
    <form className="cadastroFornecedoresForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nomeEmpresa" className="form-label">Nome da Empresa:</label>
        <input type="text" name="nomeEmpresa" placeholder="Nome da Empresa" className="form-control" value={formData.nomeEmpresa} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="estado" className="form-label">Estado:</label>
        <input type="text" name="estado" placeholder="Estado" className="form-control" value={formData.estado} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="cnpj" className="form-label">CNPJ:</label>
        <input type="number" name="cnpj" placeholder="CNPJ" className="form-control" value={formData.cnpj} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" name="email" placeholder="Email" className="form-control" value={formData.email} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="telefone" className="form-label">Telefone:</label>
        <input type="tel" name="telefone" placeholder="Telefone" className="form-control" value={formData.telefone} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="segmentoAtuacao" className="form-label">Segmento de Atuação:</label>
        <input type="text" name="segmentoAtuacao" placeholder="Segmento de Atuação" className="form-control" value={formData.segmentoAtuacao} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="status" className="form-label">Status:</label>
        <input type="text" name="status" placeholder="Status" className="form-control" value={formData.status} onChange={handleChange} />
      </div>
      <button type="submit" className="form-button">Salvar</button>
    </form>
  );
};

export default CadastroFornecedoresForm;
