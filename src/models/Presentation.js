import { Schema, model } from "mongoose";

const PresentationSchema = new Schema(
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

export default model("Presentation", PresentationSchema);
