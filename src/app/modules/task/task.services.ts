import { Task } from "./task.model";
import { ITask, TaskStatus } from "./task.interface";
import { statusFlow } from "../../utils/statusFlow";

const createTask = async (task: ITask) => {
  const result = await Task.create(task);
  return result;
};

const getAllTask = async () => {
  const result = await Task.find().sort({ createdAt: -1 });
  return result;
};

const updateTask = async (id: string, task: ITask) => {
  const existingTask = await Task.findById(id);
  if (!existingTask) {
    throw new Error("Task not found");
  }

  const allowedStatus = statusFlow[existingTask.status].next;
  if (!allowedStatus.includes(task.status)) {
    throw new Error(
      `Task can not move from ${existingTask.status} to ${task.status}`,
    );
  }
  if (
    task.status === TaskStatus.Done &&
    (!existingTask.description || existingTask.description.length < 20)
  ) {
    throw new Error("Description must be at least 20 characters long");
  }
  const result = await Task.findByIdAndUpdate(
    id,
    { status: task.status },
    { new: true },
  );
  return result;
};
export const taskService = {
  createTask,
  getAllTask,
  updateTask,
};
