const express = require('express');
const routes = express.Router();

routes.post('/users', (req, res) => {
    const body = req.body;

    console.log(body);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Leticia Souza'
    });
});

routes.listen(3333);

module.exports = routes;