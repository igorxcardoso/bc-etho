import { Router } from 'express';

const API_ROUTER = Router();

API_ROUTER.get('/', (request, response) => {
    return response.json({
         message: 'This is the first router!'
    });
});


// Para se usada entro lugar do projeto
export { API_ROUTER };