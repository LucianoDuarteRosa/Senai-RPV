const express = require('express');
const router = express.Router();

router.get('/job', (req, res) => {
    res.send('Exibindo uma lista com vagas de emprego...');
});

router.get('/job/:id', (req, res) => {
    const { id } = req.params;
    res.send('Exibindo uma vaga de emprego específica com id: ' + id + '...');
});

router.post('/job', (req, res) => {
    res.send('Criando uma nova vaga de emprego...');
});

router.put('/job/:id', (req, res) => {
    const { id } = req.params;
    res.send('Atualizando uma vaga de emprego específica com id: ' + id + '...');
});

router.delete('/job/:id', (req, res) => {
    const { id } = req.params;
    res.send('Deletando uma vaga de emprego específica com id: ' + id + '...');
});

module.exports = router;