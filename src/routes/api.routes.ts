import { Router } from 'express';
import * as userController from '../controllers/user.controller'


const API_ROUTER = Router();

// Rotas gerais
API_ROUTER.get('/', (request, response) => {
    return response.json({
         message: 'This is the first router!'
    });
});

// Rotas de usuário
API_ROUTER.post('/users/new', userController.create);


// Para se usada entro lugar do projeto
export { API_ROUTER };