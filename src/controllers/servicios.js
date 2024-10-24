// import {serviciosModel} from '../models/servicios.js';
// import {turnosModel} from '../models/turnos.js';
// import {profesionalesModel} from '../models/profesionales.js';

// export class serviciosController {
//     static async getAll(req, res) {
//         try {
//             const servicios = await serviciosModel.getAll();
//             res.json(servicios);
//         } catch (error) {
//             res.status(500).json({message: error.message});
//         }
//     }

//     static async getOne(req, res) {
//         try {
//             const servicio = await serviciosModel.findById(req.params.id);
//             if (!servicio) {
//                 return res.status(404).json({message: 'Servicio no encontrado'});
//             }
//             res.json(servicio);
//         } catch (error) {
//             res.status(500).json({message: error.message});
//         }
//     }
//     // *******
//     static async create(req, res) {
//         try {
//             const servicio = new serviciosModel(req.body);
//             await servicio.save();
//             res.status(201).json(servicio);
//         } catch (error) {
//             res.status(500).json({message: error.message});
//         }
//     }

//     static async delete(req, res) {
//         try {
//             const servicio = await serviciosModel.delete(req.params.id);
//             if (!servicio) {
//                 return res.status(404).json({message: 'Servicio no encontrado'});
//             }
//             res.json(servicio, {message: 'Servicio eliminado'});
//         } catch (error) {
//             res.status(500).json({message: error.message});
//         }
//     }


//     static async getTurnos(req, res) {
//         try {
//             const turnos = await turnosModel.find({servicio: req.params.id});
//             res.json(turnos);
//         } catch (error) {
//             res.status(500).json({message: error.message});
//         }
//     }

//     static async getProfesionales(req, res) {
//         try {
//             const profesionales = await profesionalesModel.find({servicios: req.params.id});
//             res.json(profesionales);
//         } catch (error) {
//             res.status(500).json({message: error.message});
//         }
//     }
// }
