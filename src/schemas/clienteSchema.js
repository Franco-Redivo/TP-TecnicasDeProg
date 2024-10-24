import {z} from 'zod';

const clienteSchema = z.object({
    username: z.string({
        invalid_type_error: 'Username must be a string',
        required_error: 'Username is required'
    }).min(4).max(20),
    mail: z.string().email(),
    password: z.string().min(4).max(10)
});

export function validateCliente(cliente){
    return clienteSchema.safeParse(cliente);
}

export function validateClienteUpdate(cliente){
    return clienteSchema.partial().safeParse(cliente);
}