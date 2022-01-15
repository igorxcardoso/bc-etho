import { Request, Response } from "express";
import { User } from '../models/user.model';


async function create(request: Request, response: Response) {
    const { name, email, password } = request.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
        return response.status(403).json({
            message: 'Usuário já cadastrado!'
        });
    }

    const user = new User({ name, email, password });

    user.save((error: any, result: any) => {
        if(error) {
            console.log('Error:', typeof error);
            return response.json(error);
        }else {
            console.log('Result: ', typeof result)
            return response.status(201).json({
                id: result._id,
                email: result.email,
                name: result.name
            });
        }
    });
}

async function view(request: Request, response: Response) {
    // const { id } = request.params;

    if(!request.params.id) {
        return response.status(404).json({
            message: 'Usuário não encontrado!'
        });
    }

    const user = await User.findById(request.params.id);

    if(!user) {
        return response.status(404).json({
            message: 'Usuário não encontrado!'
        });
    }

    console.log({
        id: user._id,
        email: user.email,
        name: user.name
    });
    return response.status(200).json({
        user: {
            id: user._id,
            email: user.email,
            name: user.name
        }
    });
}


export { create, view };