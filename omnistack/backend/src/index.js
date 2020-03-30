const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());

app.post('/users', (req, res) => {
    const body = req.body;

    console.log(body);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Leticia Souza'
    });
});

app.listen(3333);
