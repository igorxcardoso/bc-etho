import express from 'express';
import mongoose from 'mongoose';
import { API_ROUTER } from './routes/api.routes';
import config  from './config';


const app = express();

app.use(express.json());
app.use(API_ROUTER);        // Requisições que foram importadas de api.routes


// Vai "escutar" o servidor
app.listen(config.PORT, async () => {
    console.log(`Server is running on port: ${config.PORT}`);

    // Conexão com banco de dados
    mongoose.connect(config.MONGO_URI);
});