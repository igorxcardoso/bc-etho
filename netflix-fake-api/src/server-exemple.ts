import http from 'http';
// const http = require('http')

// Criação do servidor
const server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {
    response.statusCode = 200;                              // Status HTTP da resposta
    response.setHeader('Content-Type', 'text/plain');
    response.end("It's working!")                           // Fim da resposta
});


const port = 5000;

// Ligando o servidor para escutar mudanças
server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});