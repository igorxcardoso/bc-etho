import { Router } from 'express';
import { User } from '../models/user.model'

const API_ROUTER = Router();

// Rotas gerais
API_ROUTER.get('/', (request, response) => {
    return response.json({
         message: 'This is the first router!'
    });
});

// Rotas de usuário
API_ROUTER.post('/users/new', (request, response): void => {
    const { name, email, password } = request.body

    const user = new User({ name, email, password })

    user.save((error: any, result: any) => {
        if(error) {
            console.log('Error:', typeof error)
            response.json(error)
        }else {
            console.log('Result: ', typeof result)
            response.status(201).json(result)
        }
    });


    // console.log(name, email);

    // return response.json(request.body);
});


// Para se usada entro lugar do projeto
export { API_ROUTER };