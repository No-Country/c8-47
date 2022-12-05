import { Schema, model } from 'mongoose';

const AddressSchema = new Schema(
  {
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
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

    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    versionKey: false,
  }
);

export default model('Address', AddressSchema);
