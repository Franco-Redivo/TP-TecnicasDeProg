import {clientesModel} from '../models/clientes.js';
import {turnosModel} from '../models/turnos.js';

export class clientesController {
    async getAll(req, res) {
        try {
            const clientes = await clientesModel.find();
            res.json(clientes);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    async getOne(req, res) {
        try {
            const cliente = await clientesModel.findById(req.params.id);
            res.json(cliente);
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }

    // async create(req, res) {
    //     const cliente = new clientesModel({
    //         nombre: req.body.nombre,
    //         apellido: req.body.apellido,
    //         email: req.body.email,
    //         telefono: req.body.telefono,
    //         direccion: req.body.direccion,
    //         dni: req.body.dni
    //     });

    //     try {
    //         const newCliente = await cliente.save();
    //         res.status(201).json(newCliente);
    //     } catch (error) {
    //         res.status(400).json({message: error.message});
    //     }
    // }

    async delete(req, res) {
        try {
            await clientesModel.findByIdAndDelete(req.params.id);
            res.json({message: "Cliente eliminado"});
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }

    async update(req, res) {
        try {
            const cliente = await clientesModel.findById(req.params.id);
            cliente.nombre = req.body.nombre;
            cliente.apellido = req.body.apellido;
            cliente.email = req.body.email;
            cliente.telefono = req.body.telefono;
            cliente.direccion = req.body.direccion;
            cliente.dni = req.body.dni;

            const updatedCliente = await cliente.save();
            res.json(updatedCliente);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    async getTurnos(req, res) {
        try {
            const turnos = await turnosModel.find({cliente: req.params.id});
            res.json(turnos);
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }
}