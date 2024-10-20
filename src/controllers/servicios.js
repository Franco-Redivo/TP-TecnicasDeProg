import {serviciosModel} from '../models/servicios.js';
import {turnosModel} from '../models/turnos.js';
import {profesionalesModel} from '../models/profesionales.js';

export class serviciosController {
    async getAll(req, res) {
        try {
            const servicios = await serviciosModel.getAll();
            res.json(servicios);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    async getOne(req, res) {
        try {
            const servicio = await serviciosModel.findById(req.params.id);
            if (!servicio) {
                return res.status(404).json({message: 'Servicio no encontrado'});
            }
            res.json(servicio);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
    // *******
    async create(req, res) {
        try {
            const servicio = new serviciosModel(req.body);
            await servicio.save();
            res.status(201).json(servicio);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    async delete(req, res) {
        try {
            const servicio = await serviciosModel.delete(req.params.id);
            if (!servicio) {
                return res.status(404).json({message: 'Servicio no encontrado'});
            }
            res.json(servicio, {message: 'Servicio eliminado'});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    async update(req, res) {
        try {
            const servicio = await serviciosModel.findById(req.params.id);
            if (!servicio) {
                return res.status(404).json({message: 'Servicio no encontrado'});
            }
            Object.assign(servicio, req.body);
            await servicio.save();
            res.json(servicio);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    async getTurnos(req, res) {
        try {
            const turnos = await turnosModel.find({servicio: req.params.id});
            res.json(turnos);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    async getProfesionales(req, res) {
        try {
            const profesionales = await profesionalesModel.find({servicios: req.params.id});
            res.json(profesionales);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
}
