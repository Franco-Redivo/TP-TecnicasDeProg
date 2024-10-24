import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {usuarioModel} from '../models/usuario.js';
import bcrypt from 'bcrypt';
import {validateUsuario} from '../schemas/usuarioSchema.js';

dotenv.config();

export class authController{
    static async login(req, res){
        try {
            const {username, password} = req.body;
            const usuario = await usuarioModel.findOne(username);
            if (!usuario) {
                return res.status(404).json({message: 'Usuario no encontrado'});
            }
            const isPasswordCorrect = await bcrypt.compare(password, usuario.password);
            if (!isPasswordCorrect) {
                return res.status(401).json({message: 'Contraseña o username incorrecto'});
            }
            const { password: _, ...otherDetails } = usuario;
            const token = jwt.sign({ id: usuario.id, rol: usuario.rol }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({usuario:otherDetails, token});
           
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
    static async register(req, res){
        try {
            
            const result = validateUsuario(req.body);
            if (result.error) {
                return res.status(400).json({error: JSON.parse(result.error.message)});
            }
            
            const {username, mail, password, rol} = result.data
            
            const newUsuario = await usuarioModel.register(username, mail, password, rol);
            const token = jwt.sign({ id: newCliente.id , rol:newUsuario.rol}, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(201).json({usuario: newUsuario, token});

        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
}