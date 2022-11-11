import { Schema, model } from "mongoose";

const ResumeSchema = new Schema(
  {
    created_at: {
      type: Number,
      required: true,
    },
    deleted_at: {
      type: Number,
      default: 0,
    },
    data: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default model("Resume", ResumeSchema);
