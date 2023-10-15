import { Document, Schema, model } from 'mongoose';
import bcryptjs from 'bcryptjs';

interface UserDocument extends Document {
    name: string;
    email: string;
    password: string;
    comparePassword(preHashPassword: string): Promise<boolean>;
}

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

//  Para fazer a hash da senha
UserSchema.pre('save', async function(next) {
    const user = this as UserDocument;

    //  Só vai criar a hash se a senha for criada ou alterada
    if (!user.isModified('password')) {
        return next(); // O next é uma função de callback que vai para o proxímo bloco de código
    }

    const salt = await bcryptjs.genSalt(12);
    const hash = await bcryptjs.hashSync(user.password, salt);
    user.password = hash;

    return next();
});

//  Para comprar as hashs
UserSchema.methods.comparePassword = async function(preHashPassword: string) {
    const user = this as UserDocument;

    return bcryptjs.compare(preHashPassword, user.password).catch((error) => false);
};

const User = model<UserDocument>("User", UserSchema);

export { User };