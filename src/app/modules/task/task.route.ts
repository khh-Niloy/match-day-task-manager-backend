import { Router } from "express";
import { taskController } from "./task.controller";

export const taskRoutes = Router();

taskRoutes.post("/", taskController.createTask);
