// import { Router } from "express";
// import { turnoController } from "../controllers/turnos.js";

// export const turnoRouter = Router();

// turnoRouter.get("/", turnoController.getAll);
// turnoRouter.get("/:id", turnoController.getOne);
// turnoRouter.post("/", turnoController.create);
// turnoRouter.delete("/:id", turnoController.delete);
// turnoRouter.patch("/:id", turnoController.update);
// turnoRouter.patch("/:id/cancelar", turnoController.cancel);//tiene que ser tu turno para que lo puedas cancelar
// // turnoRouter.get("/disponibles", turnoController.getDisponibles);
// // turnoRouter.get("/completados", turnoController.getCompletados);
// turnoRouter.get("/servicios/:idServicio", turnoController.getTurnosPorServicio);
// turnoRouter.get("/profesionales/:idProfesional", turnoController.getTurnosPorProfesional);