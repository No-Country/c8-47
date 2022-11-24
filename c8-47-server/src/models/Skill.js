import { Schema, model } from 'mongoose';

const SkillSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
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

export default model('Skill', SkillSchema);
