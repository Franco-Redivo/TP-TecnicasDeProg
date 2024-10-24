// import {turnosModel} from '../models/turnos.js';
// import { validateTurnoUpdate } from '../schemas/turnoSchema.js';

// export class turnosController{
//     static async getAll(req, res) {
//         try {
//             const turnos = await turnosModel.getAll();
//             res.json(turnos);
//         } catch (error) {
//             res.status(500).json({message: error.message});
//         }
//     }

//     static async getOne(req, res) {
//         try {
//             const turno = await turnosModel.getOne(req.params.id);
//             if (!turno) {
//                 return res.status(404).json({message: 'Turno no encontrado'});
//             }
//             res.json(turno);
//         } catch (error) {
//             res.status(500).json({message: error.message});
//         }
//     }

//     static async create(req, res) {
//         try {
//             const result = validateTurno(req.body);
//             if (result.error) {
//                 return res.status(400).json({message: result.error.details[0].message});
//             }
//             const newTurno = await turnosModel.create({input:result.data});
//             res.status(201).json(newTurno);
//         } catch (error) {
//             res.status(500).json({message: error.message});
//         }
//     }

//     static async delete(req, res) {
//         try {
//             const turno = await turnosModel.delete(req.params.id);
//             if (!turno) {
//                 return res.status(404).json({message: 'Turno no encontrado'});
//             }
//             res.json(turno, {message: 'Turno eliminado'});
//         } catch (error) {
//             res.status(500).json({message: error.message});
//         }
//     }

//     static async update(req, res) {
//         try {
//             const result = validateTurnoUpdate(req.body);
//             if (result.error) {
//                 return res.status(400).json({message: result.error.details[0].message});
//             }

//             const { id } = req.params;
//             const turno = await turnosModel.update({id, input: result.data});
//             if (!turno) {
//                 return res.status(404).json({message: 'Turno no encontrado'});
//             }
        
//             res.json(turno);
//         } catch (error) {
//             res.status(500).json({message: error.message});
//         }
//     }

//     static async cancelar(req, res) {
//         try {
//             const { id } = req.params;
//             const turno = await turnosModel.cancelar(id);
//             if (!turno) {
//                 return res.status(404).json({message: 'Turno no encontrado'});
//             }
        
//             res.json(turno);
//         } catch (error) {
//             res.status(500).json({message: error.message});
//         }
//     }

//     static async getTurnosPorServicio(req, res) {
//         try {
//             const { id } = req.params;
//             const turnos = await turnosModel.getTurnosPorServicio(id);
//             res.json(turnos);
//         } catch (error) {
//             res.status(500).json({message: error.message});
//         }
//     }

//     static async getTurnosPorProfesional(req, res) {
//         try {
//             const { id } = req.params;
//             const turnos = await turnosModel.getTurnosPorProfesional(id);
//             res.json(turnos);
//         } catch (error) {
//             res.status(500).json({message: error.message});
//         }
//     }

// }