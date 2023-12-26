const express = require('express');
const serve = express();
const certificados = require('./src/data/certificados.json')


serve.get('/certificados', (req,res) => {
    return res.json(certificados)
});

serve.listen(3000, () => {
    console.log('Servidor Esta Funcionando...')
});