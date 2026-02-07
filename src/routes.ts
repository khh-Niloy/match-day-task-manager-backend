import { Router } from "express";
import { taskRoutes } from "./app/modules/task/task.route";

export const routes = Router();

const allRoutes = [
  {
    path: "/task",
    route: taskRoutes,
  },
];

allRoutes.forEach(({ path, route }) => routes.use(path, route));
