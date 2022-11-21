import { Schema, model } from 'mongoose';

const TaskSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },

    job: {
      type: Schema.Types.ObjectId,
      ref: 'Job',
    },
  },

  {
    versionKey: false,
  }
);

export default model('Task', TaskSchema);
