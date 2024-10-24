// import {z} from 'zod';

// const profesionalSchema = z.object({
//     username: z.string({required_error: 'Username is required'}).min(4).max(20),
//     email: z.string({required_error: 'Email is required'}).email(),
//     password: z.string({required_error: 'Password is required'}).min(4).max(10),
//     especialidad: z.string({required_error: 'Specialty is required'}).min(4).max(25),
    
// });

// export function validateProfesional(profesional){
//     return profesionalSchema.safeParse(profesional);
// }

// export function validateProfesionalUpdate(profesional){
//     return profesionalSchema.partial().safeParse(profesional);
// }