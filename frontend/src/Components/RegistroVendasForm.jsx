import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


const RegistroVendasForm = () => {
  const [formData, setFormData] = useState({
    nomeProduto: '',
    dataHoraVenda: '',
    itensVendidos: '',
    totalVenda: '',
    metodoPagamento: '',
    numeroFatura: '',
    statusVenda: '',
    observacoes: ''
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
      await axios.post('http://localhost:3001/registroVendas', formData);
      await Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Registro de vendas criado com sucesso!'
      });
      setFormData({
        nomeProduto: '',
        dataHoraVenda: '',
        itensVendidos: '',
        totalVenda: '',
        metodoPagamento: '',
        numeroFatura: '',
        statusVenda: '',
        observacoes: ''
      });
      window.location.reload(false);
    } catch (error) {
      console.error('Erro ao criar registro de vendas', error);
      await Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Erro ao criar registro de vendas. Verifique o console para mais detalhes.'
      });
    }
  };

  return (
    <form className="registroVendasForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nomeProduto">Nome do Produto:</label>
        <input type="text" name="nomeProduto" value={formData.nomeProduto} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="dataHoraVenda">Data e Hora da Venda:</label>
        <input type="date" name="dataHoraVenda" value={formData.dataHoraVenda} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="itensVendidos">Itens Vendidos:</label>
        <input type="text" name="itensVendidos" value={formData.itensVendidos} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="totalVenda">Total da Venda:</label>
        <input type="number" name="totalVenda" value={formData.totalVenda} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="metodoPagamento">Método de Pagamento:</label>
        <input type="text" name="metodoPagamento" value={formData.metodoPagamento} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="numeroFatura">Número de Fatura:</label>
        <input type="number" name="numeroFatura" value={formData.numeroFatura} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="statusVenda">Status da Venda:</label>
        <input type="text" name="statusVenda" value={formData.statusVenda} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="observacoes">Observações:</label>
        <input type="text" name="observacoes" value={formData.observacoes} onChange={handleChange} />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default RegistroVendasForm;
