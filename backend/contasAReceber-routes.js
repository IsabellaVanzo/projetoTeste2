const express = require('express');
const connection = require('./db');
const router = express.Router();

// Rota para listar todos os registros
router.get('/contasAReceber', (req, res) => {
  connection.query('SELECT * FROM contasAReceber', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os registros:', err);
      res.status(500).json({ error: 'Erro ao buscar os registros' });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo ID
router.get('/contasAReceber/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM contasAReceber WHERE idContasAReceber = ?', [id], (err, results) => {
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
router.post('/contasAReceber', (req, res) => {
  const { descricao, valor, dataVencimento, status, } = req.body;
  connection.query('INSERT INTO contasAReceber (descricao, valor, dataVencimento, status) VALUES (?, ?, ?, ?)',
    [descricao, valor, dataVencimento, status], (err, result) => {
      if (err) {
        console.error('Erro ao criar o registro:', err);
        res.status(500).json({ error: 'Erro ao criar o registro' });
        return;
      }
      res.status(201).json({ message: 'Registro criado com sucesso', id: result.insertId });
    });
});

// Rota para atualizar um registro existente pelo ID
router.put('/contasAReceber/:id', (req, res) => {
  const { id } = req.params;
  const { descricao, valor, dataVencimento, status } = req.body;
  connection.query('UPDATE contasAReceber SET descricao = ?, valor = ?, dataVencimento = ? status = ? WHERE id = ?',
    [descricao, valor, dataVencimento, status, id], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar o registro:', err);
        res.status(500).json({ error: 'Erro ao atualizar o registro' });
        return;
      }
      res.json({ message: 'Registro atualizado com sucesso' });
    });
});

// Rota para excluir um registro pelo ID
router.delete('/contasAReceber/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM contasAReceber WHERE idContasAReceber = ?', [id], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      res.status(500).json({ error: 'Erro ao excluir o registro' });
      return;
    }
    res.json({ message: 'Registro excluído com sucesso' });
  });
});

module.exports = router;
