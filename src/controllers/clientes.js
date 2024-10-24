// import {clientesModel} from '../models/clientes.js';

// //metodos tienen que ser static para no tener que instanciar la clase
// export class clientesController {
//     static async getAll(req, res) {
//         try {
//             const clientes = await clientesModel.getAll();
//             res.json(clientes);
//         } catch (error) {
//             res.status(500).json({message: error.message});
//         }
//     }

//     static async getOne(req, res) {
//         try {
//             const cliente = await clientesModel.findOne(req.params.id);
//             if (!cliente) {
//                 return res.status(404).json({message: 'Cliente no encontrado'});
//             }
//             res.json(cliente);
//         } catch (error) {
//             res.status(404).json({message: error.message});
//         }
//     }

//     static async delete(req, res) {
//         try {
//             await clientesModel.delete(req.params.id);
//             res.json({message: "Cliente eliminado"});
//         } catch (error) {
//             res.status(404).json({message: error.message});
//         }
//     }

//     static async getTurnos(req, res) {
//         try {
//             const turnos = await clientesModel.getTurnos(req.params.id);
//             res.json(turnos);
//         } catch (error) {
//             res.status(404).json({message: error.message});
//         }
//     }
// }