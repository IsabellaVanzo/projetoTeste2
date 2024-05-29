import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ControleEstoqueForm = () => {
  const [formData, setFormData] = useState({
    quantidade: '',
    dataEntrada: '',
    dataSaida: '',
    idCadastroProdutos: ''
  });

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/cadastroProdutos');
        setProdutos(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProdutos();
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
      await axios.post('http://localhost:3001/controleEstoque', formData);
      await Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Contas a Receber criado com sucesso!'
      });
      setFormData({
        quantidade: '',
        dataEntrada: '',
        dataSaida: '',
        idCadastroProdutos: ''
      });
      window.location.reload(false);
    } catch (error) {
      console.error('Erro ao criar controle de estoque:', error);
      await Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Erro ao criar contasAReceber. Verifique o console para mais detalhes.'
      });
    }
  };

  return (
    <form className="controleEstoqueForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="quantidade">Quantidade:</label>
        <input type="text" className="form-control" name="quantidade" placeholder="Quantidade" value={formData.quantidade} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="dataEntrada">Data de Entrada:</label>
        <input type="datetime-local" className="form-control" name="dataEntrada" placeholder="Data de Entrada" value={formData.dataEntrada} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="dataSaida">Data de Saída:</label>
        <input type="datetime-local" className="form-control" name="dataSaida" placeholder="Data de Saída" value={formData.dataSaida} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="idCadastroProdutos">Produto:</label>
        <select className="form-control" name="idCadastroProdutos" value={formData.idCadastroProdutos} onChange={handleChange}>
          <option value="">Selecione um produto</option>
          {produtos.map(produto => (
            <option key={produto.idCadastroProdutos} value={produto.idCadastroProdutos}>
              {produto.nome}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="form-button">Salvar</button>
    </form>
  );
};

export default ControleEstoqueForm;
