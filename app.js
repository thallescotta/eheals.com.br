const express = require('express');
const path = require('path');
const app = express();

// Servindo arquivos estáticos da raiz do diretório da aplicação
app.use(express.static(path.join(__dirname)));

// Rota principal que serve o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});

