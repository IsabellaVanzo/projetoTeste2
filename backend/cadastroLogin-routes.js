const express = require('express');
const connection = require('./db');
const router = express.Router();

// Rota para listar todos os registros
router.get('/cadastroLogin', (req, res) => {
  connection.query('SELECT * FROM cadastroLogin', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os registros:', err);
      res.status(500).json({ error: 'Erro ao buscar os registros' });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo ID
router.get('/cadastroLogin/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM cadastroLogin WHERE id = ?', [id], (err, results) => {
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
router.post('/cadastroLogin', (req, res) => {
  const { usuario , email, senha, idCadastroFuncionarios } = req.body;
  connection.query('INSERT INTO cadastroLogin (usuario , email, senha, idCadastroFuncionarios ) VALUES (?, ?, ?, ?)',
    [usuario , email, senha, idCadastroFuncionarios], (err, result) => {
      if (err) {
        console.error('Erro ao criar o registro:', err);
        res.status(500).json({ error: 'Erro ao criar o registro' });
        return;
      }
      res.status(201).json({ message: 'Registro criado com sucesso', id: result.insertId });
    });
});

// Rota para atualizar um registro existente pelo ID
router.put('/cadastroLogin/:id', (req, res) => {
  const { id } = req.params;
  const {usuario , email, senha, idCadastroFuncionarios } = req.body;
  connection.query('UPDATE cadastroLogin SET usuario = ?, email = ?, senha = ? ,  idCadastroFuncionarios= ?  WHERE id = ?',
    [usuario , email, senha, idCadastroFuncionarios, id], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar o registro:', err);
        res.status(500).json({ error: 'Erro ao atualizar o registro' });
        return;
      }
      res.json({ message: 'Registro atualizado com sucesso' });
    });
});

// Rota para excluir um registro pelo ID
router.delete('/cadastroLogin/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM cadastroLogin WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      res.status(500).json({ error: 'Erro ao excluir o registro' });
      return;
    }
    res.json({ message: 'Registro excluído com sucesso' });
  });
});

module.exports = router;
