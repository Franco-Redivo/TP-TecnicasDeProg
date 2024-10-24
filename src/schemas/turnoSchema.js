// import {z} from 'zod';

// const turnoSchema = z.object({
//     fecha: z.string({required_error: 'Date is required'}).date(),
//     hora: z.string({required_error: 'Hour is required'}).time(),
//     cliente: z.string({required_error: 'Client is required'}),
//     profesional: z.string({required_error: 'Professional is required'}),
//     servicio: z.string({required_error: 'Specialty is required'})
// });

// export function validateTurno(turno){
//     return turnoSchema.safeParse(turno);
// }

// export function validateTurnoUpdate(turno){
//     return turnoSchema.partial().safeParse(turno);
// }