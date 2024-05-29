const express = require('express');
const connection = require('./db');
const router = express.Router();

// Rota para listar todos os registros
router.get('/cadastroFuncionarios', (req, res) => {
  connection.query('SELECT * FROM cadastroFuncionarios', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os registros:', err);
      res.status(500).json({ error: 'Erro ao buscar os registros' });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo ID
router.get('/cadastroFuncionarios/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM cadastroFuncionarios WHERE idCadastroFuncionarios = ?', [id], (err, results) => {
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
router.post('/cadastroFuncionarios', (req, res) => {
  const { nome, sobrenome, dataNascimento, genero, email, telefone, cpf, dataCadastro, cidade, cep, cargo, departamento, dataAdmissao, salario, } = req.body;
  connection.query('INSERT INTO cadastroFuncionarios (nome, sobrenome, dataNascimento, genero, email, telefone, cpf, dataCadastro, cidade, cep, cargo, departamento, dataAdmissao, salario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [nome, sobrenome, dataNascimento, genero, email, telefone, cpf, dataCadastro, cidade, cep, cargo, departamento, dataAdmissao, salario], (err, result) => {
      if (err) {
        console.error('Erro ao criar o registro:', err);
        res.status(500).json({ error: 'Erro ao criar o registro' });
        return;
      }
      res.status(201).json({ message: 'Registro criado com sucesso', id: result.insertId });
    });
});

// Rota para atualizar um registro existente pelo ID
router.put('/cadastroFuncionarios/:id', (req, res) => {
  const { id } = req.params;
  const { nome, sobrenome, dataNascimento, genero, email, telefone, cpf, dataCadastro, cidade, cep, cargo, departamento, dataAdmissao, salario } = req.body;
  connection.query('UPDATE cadastroFuncionarios SET nome = ?, sobrenome = ?, dataNascimento = ?, genero = ?, email = ?, telefone = ?, cpf = ?, dataCadastro = ?, cidade = ?, cep = ? cargo = ?, departamento = ?, dataAdmissao = ?, salario = ? WHERE id = ?',
    [nome, sobrenome, dataNascimento, genero, email, telefone, cpf, dataCadastro, cidade, cep, cargo, departamento, dataAdmissao, salario, id], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar o registro:', err);
        res.status(500).json({ error: 'Erro ao atualizar o registro' });
        return;
      }
      res.json({ message: 'Registro atualizado com sucesso' });
    });
});

// Rota para excluir um registro pelo ID
router.delete('/cadastroFuncionarios/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM cadastroFuncionarios WHERE idCadastroFuncionarios = ?', [id], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      res.status(500).json({ error: 'Erro ao excluir o registro' });
      return;
    }
    res.json({ message: 'Registro excluído com sucesso' });
  });
});

module.exports = router;
