import { Router } from "express";
import { servicioController } from "../controllers/servicios.js";

export const servicioRouter = Router();

servicioRouter.get("/", servicioController.getAll);
servicioRouter.get("/:id", servicioController.getOne);
servicioRouter.post("/", servicioController.create);
servicioRouter.delete("/:id", servicioController.delete);
servicioRouter.patch("/:id", servicioController.update);
servicioRouter.get("/:id/turnos", servicioController.getTurnos);
servicioRouter.get("/:id/profesionales", servicioController.getProfesionales);

