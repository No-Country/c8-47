import { Schema, model } from "mongoose";

const DetailSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    organization: {
      type: String,
      required: true,
    },
    start_date: {
      type: String,
      required: true,
    },
    end_date: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default model("Detail", DetailSchema);
