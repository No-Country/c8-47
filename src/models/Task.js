import { Schema, model } from "mongoose";

const DescriptionSchema = new Schema(
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

export default model("Description", DescriptionSchema);
