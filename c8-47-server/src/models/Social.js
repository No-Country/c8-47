import { Schema, model } from 'mongoose';

const SocialSchema = new Schema(
  {
    url: {
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

export default model('Social', SocialSchema);
