import { Schema, model } from 'mongoose';

const CourseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    institution: {
      type: String,
      required: true,
    },
    date: {
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

export default model('Course', CourseSchema);
