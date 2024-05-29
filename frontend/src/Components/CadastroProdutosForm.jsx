import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const CadastroProdutosForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    categoria: '',
    descricao: '',
    preco: '',
    quantidade: ''
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
      await axios.post('http://localhost:3001/cadastroProdutos', formData);
      await Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Produto cadastrado com sucesso!'
      });
      setFormData({
        nome: '',
        categoria: '',
        descricao: '',
        preco: '',
        quantidade: ''
      });
      window.location.reload(false);
    } catch (error) {
      console.error('Erro ao criar cadastroProdutos', error);
      await Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Erro ao cadastrar produto. Verifique o console para mais detalhes.'
      });
    }
  };

  return (
    <form className="cadastroProdutosForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nome" className="form-label">Nome:</label>
        <input type="text" name="nome" placeholder="Nome" className="form-control" value={formData.nome} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="categoria" className="form-label">Categoria:</label>
        <input type="text" name="categoria" placeholder="Categoria" className="form-control" value={formData.categoria} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="descricao" className="form-label">Descrição:</label>
        <input type="text" name="descricao" placeholder="Descrição" className="form-control" value={formData.descricao} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="preco" className="form-label">Preço:</label>
        <input type="number" name="preco" placeholder="Preço" className="form-control" value={formData.preco} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="quantidade" className="form-label">Quantidade:</label>
        <input type="number" name="quantidade" placeholder="Quantidade" className="form-control" value={formData.quantidade} onChange={handleChange} />
      </div>
      <button type="submit" className="form-button">Salvar</button>
    </form>
  );
};

export default CadastroProdutosForm;
