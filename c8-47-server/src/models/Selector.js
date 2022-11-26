import { Schema, model } from 'mongoose';

const SelectorSchema = new Schema(
  {
    organization: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },

    curriculum: {
      type: Schema.Types.ObjectId,
      ref: 'Curriculum',
    },
  },
  {
    versionKey: false,
  }
);

export default model('Selector', SelectorSchema);
