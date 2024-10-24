// import {profesionalesModel} from '../models/profesionales.js';

// export class profesionalesController{
//     static async getAll(req, res) {
//         try {
//             const profesionales = await profesionalesModel.getAll();
//             res.json(profesionales);
//         } catch (error) {
//             res.status(500).json({message: error.message});
//         }
//     }

//     static async getOne(req, res) {
//         try {
//             const profesional = await profesionalesModel.findOne(req.params.id);
//             if (!profesional) {
//                 return res.status(404).json({message: 'Profesional no encontrado'});
//             }
//             res.json(profesional);
//         } catch (error) {
//             res.status(500).json({message: error.message});
//         }
//     }

//     static async create(req, res) {
//         try {
//             const result = validateProfesional(req.body);
//             if (result.error) {
//                 return res.status(400).json({message: result.error.details[0].message});
//             }
//             const newProfesional = await profesionalesModel.create({input:result.data});
//             res.status(201).json(newProfesional);
//         } catch (error) {
//             res.status(500).json({message: error.message});
//         }
//     }

//     static async delete(req, res) {
//         try {
//             await profesionalesModel.delete(req.params.id);
//             res.json({message: "Profesional eliminado"});
//         } catch (error) {
//             res.status(500).json({message: error.message});
//         }
//     }

//     static async getTurnos(req, res) {
//         try {
//             const turnos = await profesionalesModel.getTurnos(req.params.id);
//             res.json(turnos);
//         } catch (error) {
//             res.status(500).json({message: error.message});
//         }
//     }

//     static async getServicios(req, res) {
//         try {
//             const servicios = await profesionalesModel.getServicios(req.params.id);
//             res.json(servicios);
//         } catch (error) {
//             res.status(500).json({message: error.message});
//         }
//     }

//     static async getHorarios(req, res) {
//         try {
//             const horarios = await profesionalesModel.getHorarios(req.params.id);
//             res.json(horarios);
//         } catch (error) {
//             res.status(500).json({message: error.message});
//         }
//     }

//     static async cancelTurno(req, res) {
//         try {
//             await profesionalesModel.cancelTurno(req.params.id, req.params.idTurno);
//             res.json({message: "Turno cancelado"});
//         } catch (error) {
//             res.status(500).json({message: error.message});
//         }
//     }


// }