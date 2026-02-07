import { model, Schema } from "mongoose";
import { ITask, TaskStatus } from "./task.interface";

const taskSchema = new Schema<ITask>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: Object.values(TaskStatus),
      default: TaskStatus.ToDo,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Task = model<ITask>("Task", taskSchema);
