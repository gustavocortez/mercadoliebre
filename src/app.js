const express = require('express');
const app = express();
const path = require('path');

//Indicar archivos estáticos
app.use(express.static('public'));

//Levantar el servidor
app.listen(3001, () => {
    console.log('Servidor corriendo en el puerto 3001');
});

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.get('/register', (req, res) =>{
    res.sendFile(path.join(__dirname, '/views/register.html'))
});