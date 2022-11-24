import { Schema, model } from 'mongoose';

const LanguageSchema = new Schema(
  {
    language: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
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

export default model('Language', LanguageSchema);
