// import {authModel} from '../models/auth.js';
import { request } from 'express';
import {clientesModel} from '../models/clientes.js';
import bcrypt from 'bcrypt';
import {validateCliente} from '../schemas/clienteSchema.js';

export class authController{
    static async login(req, res){
        try {
            const {username, password} = req.body;
            const cliente = await clientesModel.findOne(username);
            if (!cliente) {
                return res.status(404).json({message: 'Cliente no encontrado'});
            }
            const isPasswordCorrect = await bcrypt.compare(password, cliente.password);//*******
            if (!isPasswordCorrect) {
                return res.status(401).json({message: 'Contraseña o username incorrecto'});
            }
            const { pass, ...otherDetails } = cliente;
            res.json(...otherDetails);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
    static async register(req, res){
        try {
            
            const result = validateCliente(req.body);
            if (result.error) {
                return res.status(400).json({error: JSON.parse(result.error.message)});
            }
            
            const {username, mail, password} = result.data
            // const newCliente = await clientesModel.register({input:result.data});
            
            const newCliente = await clientesModel.register(username, mail, password);
            res.status(201).json(newCliente);

        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
}