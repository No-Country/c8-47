import { Schema, model } from 'mongoose';

const ContactSchema = new Schema(
  {
    address: {
      state: {
        type: String,
      },
      city: {
        type: String,
      },
      zip_code: {
        type: String,
      },
      street_name: {
        type: String,
      },
      street_number: {
        type: String,
      },
      door: {
        type: String,
      },
    },

    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    web: {
      type: String,
    },
    socials: [String],

    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    versionKey: false,
  }
);

export default model('Contact', ContactSchema);
