import { Request, Response } from "express";
import { responseManager } from "../../utils/responseManager";
import { taskService } from "./task.services";

const createTask = async (req: Request, res: Response) => {
  try {
    const result = await taskService.createTask(req.body);
    responseManager.success(res, {
      statusCode: 200,
      success: true,
      message: "Task created successfully",
      data: result,
    });
  } catch (error) {
    responseManager.error(res, error as Error, 400);
  }
};

export const taskController = {
  createTask,
};
