import { Schema, model } from 'mongoose';

const EducationSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    institution: {
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
    comment: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default model('Education', EducationSchema);
