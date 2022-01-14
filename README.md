# Fullstack

Para executar o npm basta digitar o seguinte comando:

```
npm run dev
```



## Estrutura Básica de um servidor em Node.JS em TypeScript

Abaixo encontra-se um exemplo simples em node
~~~typescript
```
import http from 'http';

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end("It's working!");
});

const port = 5000;
server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
```

Para executar
```
npm run server-exemple
```