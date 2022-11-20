import { Schema, model } from 'mongoose';

const SocialSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },

    contact: {
      type: Schema.Types.ObjectId,
      ref: 'Contact',
    },
  },
  {
    versionKey: false,
  }
);

export default model('Social', SocialSchema);
