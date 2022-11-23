import { Schema, model } from 'mongoose';

const CurriculumSchema = new Schema(
  {
    deleted_at: {
      type: Number,
      default: 0,
    },
    data: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      enum: ['generated', 'sended', 'rejected', 'interview'],
      default: 'generated',
    },

    selector: {
      type: Schema.Types.ObjectId,
      ref: 'Selector',
    },
    tag: {
      type: Schema.Types.ObjectId,
      ref: 'Tag',
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    versionKey: false,
  }
);

export default model('Curriculum', CurriculumSchema);
