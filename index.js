import express, {json} from 'express';
import cors from 'cors';

import {turnoRouter} from './src/routes/turnos.js';
import {clienteRouter} from './src/routes/clientes.js';
import {profesionalesRouter} from './src/routes/profesionales.js';
import {servicioRouter} from './src/routes/servicios.js';
import {authRouter} from './src/routes/auth.js';

const app = express();

app.use(cors());
app.use(json());
app.disable('x-powered-by');

app.use("/turnos", turnoRouter);
app.use("/clientes", clienteRouter);
app.use("/profesionales", profesionalesRouter);
app.use("/servicios", servicioRouter);
app.use("/auth", authRouter);
