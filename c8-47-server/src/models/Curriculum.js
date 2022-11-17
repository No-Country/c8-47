import { Schema, model } from 'mongoose';

const CurriculumSchema = new Schema(
  {
    created_at: {
      type: Number,
      required: true,
    },
    deleted_at: {
      type: Number,
      default: 0,
    },
    data: {
      type: String,
      required: true,
    },

    selector: {
      type: Schema.Types.ObjectId,
      ref: 'Selector',
    },
  },
  {
    versionKey: false,
  }
);

export default model('Curriculum', CurriculumSchema);
