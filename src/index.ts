import express from 'express';

const PORT = 5000;
const app = express();

app.use(express.json());

// Requisição
app.get('/', (request, response) => {
    // .sendStatus(200) -> Vai enviar o status e acabar com a requisição (n vai mostrar a mensagem)
    response.status(200).json({
        message: 'We can create a Express server!'
    });

});

// Vai "escutar" o servidor
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});