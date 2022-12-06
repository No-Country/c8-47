import { Schema, model } from 'mongoose';

const PersonalSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    birth: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    socials: [String],

    /*     title: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    }, */

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

export default model('Personal', PersonalSchema);
