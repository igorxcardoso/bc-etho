import { Request, Response } from "express";
import { User } from '../models/user.model';
import jwt from 'jsonwebtoken';
import config from '../config';


//  Criar uma sessão para o usuário
async function create(request: Request, response: Response) {
    const { name, email, password } = request.body;
    const userExists = await User.findOne({ email });

    if(userExists) {
        return response.status(403).json({
            message: 'Usuário já cadastrado!'
        });
    }else {
        const user = new User({ name, email, password });

        user.save((error: any, result: any) => {
            if(error) {
                console.log('Error:', typeof error);
                return response.json(error);
            }else {

                const accessToken = createAccessToken(result._id);

                console.log('Result: ', typeof result)
                return response.status(201).json(
                    {
                        user: {
                            id: result._id,
                            email: result.email,
                            // password: result.password,
                            name: result.name
                        },
                        accessToken
                    }
                );
            }
        });
    }
}


//  Função para criar o token
function createAccessToken(userId: string) {
    const accessToken = jwt.sign(
        {
            id: userId,

        },
        config.TOKEN_SECRET,
        {
            expiresIn: 900  // 15 minutos
        }
    );

    return accessToken;
}



export { create };