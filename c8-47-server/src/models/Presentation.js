import { Schema, model } from 'mongoose';

const PresentationSchema = new Schema(
  {
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
