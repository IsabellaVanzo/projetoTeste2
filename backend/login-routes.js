const express = require('express');
const connection = require('./db');
const router = express.Router();

// Rota para buscar um registro específico pelo ID
router.get('/login/:id', (req, res) => {
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


// Rota para efetuar LOGIN
router.post('/loginSistema', (req, res) => {
  const { email, senha } = req.body;
  connection.query('SELECT senha FROM cadastroLogin WHERE email = ?',
    [email], (err, result) => {
      console.log(`senha: ${senha} e resultsenha: ${result}`);
      console.log(result[0].senha);
      if (err) {
        console.error('Erro ao consultar o registro:', err);
        res.status(500).json({ error: 'Erro ao consultar o registro especificado' });
        return;
      }
      if (senha != result[0].senha) {
        console.error('Senha inválida', err);
        res.status(500).json({ error: 'Senha inválida, tente novamente!' });
        return;
      }
      console.log('login efetuado');

      res.status(201).json({ message: result, id: result.insertId });
    });
});

// Rota para criar um novo registro
router.post('/login', (req, res) => {
  const { email, senha } = req.body;
  connection.query('INSERT INTO login (email, senha) VALUES (?, ?)',
    [email, senha], (err, result) => {
      if (err) {
        console.error('Erro ao criar o registro:', err);
        res.status(500).json({ error: 'Erro ao criar o registro' });
        return;
      }
      res.status(201).json({ message: 'Registro criado com sucesso', id: result.insertId });
    });
});

// Rota para atualizar um registro existente pelo ID
router.put('/login/:id', (req, res) => {
  const { id } = req.params;
  const { email, senha } = req.body;
  connection.query('UPDATE login SET email = ?, senha = ?, WHERE id = ?',
    [email, senha, id], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar o registro:', err);
        res.status(500).json({ error: 'Erro ao atualizar o registro' });
        return;
      }
      res.json({ message: 'Registro atualizado com sucesso' });
    });
});

// Rota para excluir um registro pelo ID
router.delete('/login/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM login WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      res.status(500).json({ error: 'Erro ao excluir o registro' });
      return;
    }
    res.json({ message: 'Registro excluído com sucesso' });
  });
});



module.exports = router;
