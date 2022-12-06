import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema(
  {
    email: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    images_urls: [String],
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },

    address: {
      type: Schema.Types.ObjectId,
      ref: 'Address',
    },
    curriculums: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Curriculum',
      },
    ],
    education: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Education',
      },
    ],
    experience: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Job',
      },
    ],
    languages: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Language',
      },
    ],
    personal: {
      type: Schema.Types.ObjectId,
      ref: 'Personal',
    },
    presentations: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Presentation',
      },
    ],
    skills: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Skill',
      },
    ],
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Tag',
      },
    ],
  },
  {
    versionKey: false,
  }
);

UserSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) return next();

  const hash = await bcrypt.hash(user.password, 10);
  user.password = hash;
  next();
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const user = this;
  const compare = await bcrypt.compare(candidatePassword, user.password);

  return compare;
};

UserSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    // returnedObject.id = returnedObject._id;
    delete returnedObject.password;
  },
});

export default model('User', UserSchema);
