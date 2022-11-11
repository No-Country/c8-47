import { Schema, model } from "mongoose";

const SectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    priority: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default model("Section", SectionSchema);
