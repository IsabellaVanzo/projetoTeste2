import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const HistoricoClientesForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    dataHora: '',
    tipoInteracao: '',
    resultadoInteracao: '',
    descricaoInteracao: '',
    idRegistroVendas: '',
  });

  const [vendas, setVendas] = useState([]);

  useEffect(() => {
    fetchVendas();
  }, []);

  const fetchVendas = async () => {
    try {
      const response = await axios.get('http://localhost:3001/registroVendas');
      setVendas(response.data); // Assuming API returns array of vendas
    } catch (error) {
      console.error('Erro ao buscar vendas: ', error);
    }
  };

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
      await axios.post('http://localhost:3001/historicoClientes', formData);
      await Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Contas a Receber criado com sucesso!'
      });
      setFormData({
        nome: '',
        sobrenome: '',
        dataHora: '',
        tipoInteracao: '',
        resultadoInteracao: '',
        descricaoInteracao: '',
        idRegistroVendas: '',
      });
      window.location.reload(false);
    } catch (error) {
      console.error('Erro ao criar cadastro de cliente: ', error);
      await Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Erro ao criar contasAReceber. Verifique o console para mais detalhes.'
      });
    }
  };

  return (
    <form className="cadastroClientesForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="nome">Nome:</label>
        <input type="text" className="form-control" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="sobrenome">Sobrenome:</label>
        <input type="text" className="form-control" name="sobrenome" placeholder="Sobrenome" value={formData.sobrenome} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="dataHora">Data da interação:</label>
        <input type="datetime-local" className="form-control" name="dataHora" placeholder="Data da interação" value={formData.dataHora} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="tipoInteracao">Tipo de interação:</label>
        <input type="text" className="form-control" name="tipoInteracao" placeholder="Tipo de interação" value={formData.tipoInteracao} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="resultadoInteracao">Resultado da interação:</label>
        <input type="text" className="form-control" name="resultadoInteracao" placeholder="Resultado da interação" value={formData.resultadoInteracao} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="descricaoInteracao">Descrição da interação:</label>
        <input type="text" className="form-control" name="descricaoInteracao" placeholder="Descrição da interação" value={formData.descricaoInteracao} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="idRegistroVendas">ID da Venda:</label>
        <select className="form-control" name="idRegistroVendas" value={formData.idRegistroVendas} onChange={handleChange}>
          <option value="">Selecione o ID da venda</option>
          {vendas.map((venda) => (
            <option key={venda.idRegistroVendas} value={venda.idRegistroVendas}>
              {venda.idRegistroVendas}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="form-button">Salvar</button>
    </form>
  );
};

export default HistoricoClientesForm;

