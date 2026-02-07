import { Task } from "./task.model";
import { ITask } from "./task.interface";

const createTask = async (task: ITask) => {
  const result = await Task.create(task);
  return result;
};
export const taskService = {
  createTask,
};
