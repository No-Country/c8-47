import { Schema, model } from "mongoose";

const IconSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default model("Icon", IconSchema);
