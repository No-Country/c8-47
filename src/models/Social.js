import { Schema, model } from "mongoose";

const SocialSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default model("Social", SocialSchema);
