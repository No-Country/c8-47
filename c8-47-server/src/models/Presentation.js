import { Schema, model } from 'mongoose';

const PresentationSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    text: {
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

export default model('Presentation', PresentationSchema);
