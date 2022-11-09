import { Schema, model } from "mongoose";

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
  },
  {
    versionKey: false,
  }
);

export default model("Contact", ContactSchema);
