import { TaskStatus } from "../modules/task/task.interface";

export const statusFlow: Record<TaskStatus, { next: TaskStatus[] }> = {
  [TaskStatus.ToDo]: {
    next: [TaskStatus.InProgress],
  },
  [TaskStatus.InProgress]: {
    next: [TaskStatus.Done],
  },
  [TaskStatus.Done]: {
    next: [],
  },
};
