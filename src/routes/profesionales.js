import { Router } from "express";
import { profesionalController } from "../controllers/profesionales.js";

export const profesionalesRouter = Router();

profesionalesRouter.get("/", profesionalController.getAll);
profesionalesRouter.get("/:id", profesionalController.getOne);
profesionalesRouter.post("/", profesionalController.create);
profesionalesRouter.delete("/:id", profesionalController.delete);
profesionalesRouter.patch("/:id", profesionalController.update);

profesionalesRouter.get("/:id/turnos", profesionalController.getTurnos);
profesionalesRouter.get("/:id/servicios", profesionalController.getServicios);
profesionalesRouter.get("/:id/horarios", profesionalController.getHorarios);
profesionalesRouter.patch("/:id/turnos/:idTurno", profesionalController.cancelTurno);
