const express = require('express');
const connection = require('./db');
const router = express.Router();

// Rota para listar todos os registros
router.get('/controleEstoque', (req, res) => {
  connection.query('SELECT * FROM controleEstoque', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os registros:', err);
      res.status(500).json({ error: 'Erro ao buscar os registros' });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo ID
router.get('/controleEstoque/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM controleEstoque WHERE id = ?', [id], (err, results) => {
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
router.post('/controleEstoque', (req, res) => {
  const {quantidade, dataEntrada, dataSaida, idCadastroProdutos } = req.body;
  connection.query('INSERT INTO controleEstoque (quantidade, dataEntrada, dataSaida, idCadastroProdutos) VALUES (?, ?, ?, ? )',
    [quantidade, dataEntrada, dataSaida, idCadastroProdutos], (err, result) => {
      if (err) {
        console.error('Erro ao criar o registro:', err);
        res.status(500).json({ error: 'Erro ao criar o registro' });
        return;
      }
      res.status(201).json({ message: 'Registro criado com sucesso', id: result.insertId });
    });
});

// Rota para atualizar um registro existente pelo ID
router.put('/controleEstoque/:id', (req, res) => {
  const { id } = req.params;
  const {quantidade, dataEntrada, dataSaida, idCadastroProdutos } = req.body;
  connection.query('UPDATE controleEstoque SET quantidade = ? , dataEntrada = ?, dataSaida = ?, idCadastroProdutos = ? ,  WHERE id = ?',
    [quantidade, dataEntrada, dataSaida, idCadastroProdutos, id], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar o registro:', err);
        res.status(500).json({ error: 'Erro ao atualizar o registro' });
        return;
      }
      res.json({ message: 'Registro atualizado com sucesso' });
    });
});

// Rota para excluir um registro pelo ID
router.delete('/controleEstoque/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM controleEstoque WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      res.status(500).json({ error: 'Erro ao excluir o registro' });
      return;
    }
    res.json({ message: 'Registro excluído com sucesso' });
  });
});

module.exports = router;
