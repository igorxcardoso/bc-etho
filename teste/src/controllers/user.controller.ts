import { Request, Response } from "express";
import { User } from '../models/user.model';


async function create(request: Request, response: Response) {
    const { name, email, password } = request.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
        return response.status(403).json({
            message: 'Usuário já cadastrado'
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


export { create };