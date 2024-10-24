import {z} from 'zod';

const usuarioSchema = z.object({
    username: z.string({
        invalid_type_error: 'Username must be a string',
        required_error: 'Username is required'
    }).min(4).max(20),
    mail: z.string().email(),
    password: z.string().min(4).max(10)
});

export function validateUsuario(usuario){
    return usuarioSchema.safeParse(usuario);
}

export function validateUsuarioUpdate(usuario){
    return usuarioSchema.partial().safeParse(usuario);
}