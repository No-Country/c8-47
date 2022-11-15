import { Schema, model } from 'mongoose';

const PersonalSchema = new Schema(
  {
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default model('Personal', PersonalSchema);
