import { Router } from "express";
import { clienteController } from "../controllers/clientes.js";

export const clienteRouter = Router();

//GET ALL
clienteRouter.get("/", clienteController.getAll);
//GET
clienteRouter.get("/:id", clienteController.getOne);
//DELETE
clienteRouter.delete("/:id", clienteController.delete);
//UPDATE
clienteRouter.patch("/:id", clienteController.update);
//GET TURNOS
clienteRouter.get("/:id/turnos", clienteController.getTurnos);
