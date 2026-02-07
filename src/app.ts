import express from "express";
import { Request, Response } from "express";
import { routes } from "./routes";
import cors from "cors";
export const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  }),
);

app.use("/api/v1", routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Match Day Task Manager Backend");
});
