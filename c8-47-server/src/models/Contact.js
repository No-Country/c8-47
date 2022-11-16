import { Schema, model } from 'mongoose';

const ContactSchema = new Schema(
  {
    address: {
      state: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      zip_code: {
        type: String,
        required: true,
      },
      street_name: {
        type: String,
      },
      street_number: {
        type: String,
      },
    },

    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    web: {
      type: String,
    },

    socials: {
      type: Schema.Types.ObjectId,
      ref: 'Social',
    },

    user: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default model('Contact', ContactSchema);
