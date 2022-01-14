import express from 'express';
import mongoose from 'mongoose';
import { API_ROUTER } from './routes/api.routes';
import config  from './config';


const app = express();

app.use(express.json());
app.use(API_ROUTER);

// // Requisição
// app.get('/', (request, response) => {
//     // .sendStatus(200) -> Vai enviar o status e acabar com a requisição (n vai mostrar a mensagem)
//     response.status(200).json({
//         message: 'We can create a Express server! :)'
//     });

// });

// Vai "escutar" o servidor
app.listen(config.PORT, async () => {
    console.log(`Server is running on port: ${config.PORT}`);

    mongoose.connect(config.MONGO_URI)
});