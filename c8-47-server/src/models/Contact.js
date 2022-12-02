import { Schema, model } from 'mongoose';

const ContactSchema = new Schema(
  {
    address: {
      //! VOLVER A VER agregar pais
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
      type: String, //! VOLVER A VER agregar required?
    },
    phone: {
      type: String,
    },
    web: {
      type: String, //! VOLVER A VER quitar campo?
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
