const express = require('express');
const connection = require('./db');
const router = express.Router();

// Rota para listar todos os registros
router.get('/cadastroFornecedores', (req, res) => {
  connection.query('SELECT * FROM cadastroFornecedores', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os registros:', err);
      res.status(500).json({ error: 'Erro ao buscar os registros' });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo ID
router.get('/cadastroFornecedores/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM cadastroFornecedores WHERE idCadastroFornecedores = ?', [id], (err, results) => {
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
router.post('/cadastroFornecedores', (req, res) => {
  const { nomeEmpresa, estado, cnpj, email, telefone, segmentoAtuacao, status, } = req.body;
  connection.query('INSERT INTO cadastroFornecedores (nomeEmpresa, estado, cnpj, email, telefone, segmentoAtuacao, status) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [nomeEmpresa, estado, cnpj, email, telefone, segmentoAtuacao, status], (err, result) => {
      if (err) {
        console.error('Erro ao criar o registro:', err);
        res.status(500).json({ error: 'Erro ao criar o registro' });
        return;
      }
      res.status(201).json({ message: 'Registro criado com sucesso', id: result.insertId });
    });
});

// Rota para atualizar um registro existente pelo ID
router.put('/cadastroFornecedores/:id', (req, res) => {
  const { id } = req.params;
  const { nomeEmpresa, estado, cnpj, email, telefone, segmentoAtuacao, status } = req.body;
  connection.query('UPDATE cadastroFornecedores SET nomeEmpresa = ?, estado = ?, cnpj = ? email = ?, telefone = ?, segmentoAtuacao = ?, status = ? WHERE id = ?',
    [nomeEmpresa, estado, cnpj, email, telefone, segmentoAtuacao, status, id], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar o registro:', err);
        res.status(500).json({ error: 'Erro ao atualizar o registro' });
        return;
      }
      res.json({ message: 'Registro atualizado com sucesso' });
    });
});

// Rota para excluir um registro pelo ID
router.delete('/cadastroFornecedores/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM cadastroFornecedores WHERE idCadastroFornecedores = ?', [id], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      res.status(500).json({ error: 'Erro ao excluir o registro' });
      return;
    }
    res.json({ message: 'Registro excluído com sucesso' });
  });
});

module.exports = router;
