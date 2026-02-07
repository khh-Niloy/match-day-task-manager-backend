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

const getAllTask = async (req: Request, res: Response) => {
  try {
    const result = await taskService.getAllTask();
    responseManager.success(res, {
      statusCode: 200,
      success: true,
      message: "Task fetched successfully",
      data: result,
    });
  } catch (error) {
    responseManager.error(res, error as Error, 400);
  }
};

const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await taskService.updateTask(id as string, req.body);
    responseManager.success(res, {
      statusCode: 200,
      success: true,
      message: "Task updated successfully",
      data: result,
    });
  } catch (error) {
    responseManager.error(res, error as Error, 400);
  }
};

export const taskController = {
  createTask,
  getAllTask,
  updateTask,
};
