import * as dotenv from 'dotenv';
dotenv.config();
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';

import User from '../models/User.js';

const { JWT_SECRET_CODE } = process.env;

const signUp = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { email, password, first_name, last_name } = req.body;

  try {
    const userFound = await User.exists({ email });
    if (userFound)
      return res.status(200).json({ message: 'Email ya registrado' });

    await User.create({
      email,
      password,
      first_name,
      last_name,
    });

    return res.status(201).json({ message: 'Cuenta creada con éxito' });
  } catch (error) {
    next(error);
  }
};

const logIn = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (!userFound)
      return res
        .status(401)
        .json({ message: 'Email o contraseña incorrectos' });

    const validity = await userFound.comparePassword(password);
    if (!validity)
      return res
        .status(401)
        .json({ message: 'Email o contraseña incorrectos' });

    const payload = { email, id: userFound._id };

    //!VOLVER A VER ver que usar para la firma
    const token = jwt.sign({ payload }, JWT_SECRET_CODE, {
      expiresIn: 864000,
    });

    return res
      .status(200)
      .json({ token, message: 'Sesión iniciada con éxito' });
  } catch (error) {
    next(error);
  }
};

export { signUp, logIn };
