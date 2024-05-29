const express = require('express');
const connection = require('./db');
const router = express.Router();

// Rota para listar todos os registros
router.get('/registroVendas', (req, res) => {
  connection.query('SELECT * FROM registroVendas', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os registros:', err);
      res.status(500).json({ error: 'Erro ao buscar os registros' });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo ID
router.get('/registroVendas/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM registroVendas WHERE idRegistroVendas = ?', [id], (err, results) => {
    if (err) {
      console.error('Erro ao buscar o registro:', err);
      res.status(500).json({ error: 'Erro ao buscar o registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro não encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

// Rota para criar um novo registro
router.post('/registroVendas', (req, res) => {
  const { nomeProduto, dataHoraVenda, itensVendidos, totalVenda, metodoPagamento, numeroFatura, statusVenda, observacoes, } = req.body;
  connection.query('INSERT INTO registroVendas (nomeProduto, dataHoraVenda, itensVendidos, totalVenda, metodoPagamento, numeroFatura, statusVenda, observacoes) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    [nomeProduto, dataHoraVenda, itensVendidos, totalVenda, metodoPagamento, numeroFatura, statusVenda, observacoes], (err, result) => {
      if (err) {
        console.error('Erro ao criar o registro:', err);
        res.status(500).json({ error: 'Erro ao criar o registro' });
        return;
      }
      res.status(201).json({ message: 'Registro criado com sucesso', id: result.insertId });
    });
});

// Rota para atualizar um registro existente pelo ID
router.put('/registroVendas/:id', (req, res) => {
  const { id } = req.params;
  const { nomeProduto, dataHoraVenda, itensVendidos, totalVenda, metodoPagamento, numeroFatura, statusVenda, observacoes } = req.body;
  connection.query('UPDATE registroVendas SET nomeProduto = ?, dataHoraVenda = ?, itensVendidos = ? totalVenda = ?, metodoPagamento = ?, numeroFatura = ?, statusVenda = ?, observacoes = ? WHERE id = ?',
    [nomeProduto, dataHoraVenda, itensVendidos, totalVenda, metodoPagamento, numeroFatura, statusVenda, observacoes, id], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar o registro:', err);
        res.status(500).json({ error: 'Erro ao atualizar o registro' });
        return;
      }
      res.json({ message: 'Registro atualizado com sucesso' });
    });
});

router.delete('/registroVendas/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM registroVendas WHERE idRegistroVendas = ?', [id], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      res.status(500).json({ error: 'Erro ao excluir o registro' });
      return;
    }
    res.json({ message: 'Registro excluído com sucesso' });
  });
});
module.exports = router;
