const express = require('express');
const app = express();
app.get('/', (req, res) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Leticia Souza'
    });
});

app.listen(3333);
