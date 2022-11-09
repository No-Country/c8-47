import { Schema, model } from "mongoose";

const TaskSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default model("Task", TaskSchema);
