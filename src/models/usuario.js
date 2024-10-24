import pool from '../config/db.js';
import bcrypt from 'bcrypt';



export class usuarioModel {

    static async register(username, email, password, rol) {
        try {
            const salt = bcrypt.genSaltSync(10);
            const hashPass = bcrypt.hashSync(password, salt);

            const query = `INSERT INTO usuarios (username, mail, password, rol) VALUES ($1, $2, $3, $4) RETURNING *`;
            const result = await pool.query(query, [username, email, hashPass, rol]);
            
            return result.rows[0];
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    static async findOne(username) {
        try {
            const query = `SELECT * FROM usuarios
            WHERE username = $1 `;
            const result = await pool.query(query, [username]);
            return result.rows[0];
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

}