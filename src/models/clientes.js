import pool from '../config/db.js';
import bcrypt from 'bcrypt';



export class clientesModel {
    static async findOne(username) {
        try {
            const query = `SELECT * FROM usuarios WHERE username = $1 
            INNER JOIN clientes ON usuarios.id = clientes.id_usuario`;
            const result = await pool.query(query, [username]);
            return result.rows[0];
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    static async register(username, email, password) {
        try {
            const salt = bcrypt.genSaltSync(10);
            const hashPass = bcrypt.hashSync(password, salt);

            const query = `INSERT INTO usuarios (username, mail, password) VALUES ($1, $2, $3) RETURNING *`;
            const result = await pool.query(query, [username, email, hashPass]);
            const query2 = `INSERT INTO clientes (usuario_id) VALUES ($1) RETURNING *`;
            const result2 = await pool.query(query2, [result.rows[0].id]);
            return result.rows[0];
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}