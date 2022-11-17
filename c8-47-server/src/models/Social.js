import { Schema, model } from 'mongoose';

const SocialSchema = new Schema(
  {
    //!VOLVER A VER preguntar por modelo Social, agregar un array de urls. Los iconos deben pedirse desde el front
    url: {
      type: String,
      required: true,
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

export default model('Social', SocialSchema);
