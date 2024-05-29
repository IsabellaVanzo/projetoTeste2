const express = require('express');
const connection = require('./db');
const router = express.Router();

// Rota para listar todos os registros
router.get('/cadastroProdutos', (req, res) => {
  connection.query('SELECT * FROM cadastroProdutos', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os registros:', err);
      res.status(500).json({ error: 'Erro ao buscar os registros' });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo ID
router.get('/cadastroProdutos/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM cadastroProdutos WHERE idCadastroProdutos = ?', [id], (err, results) => {
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
router.post('/cadastroProdutos', (req, res) => {
  const { nome, categoria, descricao, preco, quantidade, } = req.body;
  connection.query('INSERT INTO cadastroProdutos (nome, categoria, descricao, preco, quantidade) VALUES (?, ?, ?, ?, ?)',
    [nome, categoria, descricao, preco, quantidade], (err, result) => {
      if (err) {
        console.error('Erro ao criar o registro:', err);
        res.status(500).json({ error: 'Erro ao criar o registro' });
        return;
      }
      res.status(201).json({ message: 'Registro criado com sucesso', id: result.insertId });
    });
});

// Rota para atualizar um registro existente pelo ID
router.put('/cadastroProdutos/:id', (req, res) => {
  const { id } = req.params;
  const { nome, categoria, descricao, preco, quantidade } = req.body;
  connection.query('UPDATE cadastroProdutos SET nome = ?, categoria = ?, descricao = ?, preco = ?, quantidade = ? WHERE id = ?',
    [nome, categoria, descricao, preco, quantidade, id], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar o registro:', err);
        res.status(500).json({ error: 'Erro ao atualizar o registro' });
        return;
      }
      res.json({ message: 'Registro atualizado com sucesso' });
    });
});

// Rota para excluir um registro pelo ID
router.delete('/cadastroProdutos/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM cadastroProdutos WHERE idCadastroProdutos = ?', [id], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      res.status(500).json({ error: 'Erro ao excluir o registro' });
      return;
    }
    res.json({ message: 'Registro excluído com sucesso' });
  });
});

module.exports = router;
