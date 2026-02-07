export enum TaskStatus {
  ToDo = "To-Do",
  InProgress = "In-Progress",
  Done = "Done",
}

export interface ITask {
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: Date;
}
