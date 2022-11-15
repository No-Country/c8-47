import { Schema, model } from 'mongoose';

const SkillSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default model('Skill', SkillSchema);
