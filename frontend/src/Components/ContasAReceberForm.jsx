// ContasAReceberForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ContasAReceberForm = () => {
  const [formData, setFormData] = useState({
    descricao: '',
    valor: '',
    dataVencimento: '',
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
      await axios.post('http://localhost:3001/contasAReceber', formData);
      await Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Contas a Receber criado com sucesso!'
      });
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        descricao: '',
        valor: '',
        dataVencimento: '',
        status: ''
      });
      window.location.reload(false);
    } catch (error) {
      console.error('Erro ao criar contasAReceber', error);
      await Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Erro ao criar contasAReceber. Verifique o console para mais detalhes.'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="descricao" placeholder="Descrição" value={formData.descricao} onChange={handleChange} />
      <input type="number" name="valor" placeholder="Valor" value={formData.valor} onChange={handleChange} />
      <input type="date" name="dataVencimento" placeholder="Data de Vencimento" value={formData.dataVencimento} onChange={handleChange} />
      <input type="text" name="status" placeholder="Status" value={formData.status} onChange={handleChange} />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default ContasAReceberForm;
