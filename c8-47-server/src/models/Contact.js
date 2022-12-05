import { Schema, model } from 'mongoose';

const ContactSchema = new Schema(
  {
    email: {
      type: String, //! VOLVER A VER agregar required?
    },
    phone: {
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
