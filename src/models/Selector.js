import { Schema, model } from "mongoose";

const SelectorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default model("Selector", SelectorSchema);
