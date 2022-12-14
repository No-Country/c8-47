import * as dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

import User from '../models/User.js';

const { JWT_SECRET_CODE } = process.env;

const signUp = async (req, res, next) => {
  const { email, new_password, first_name, last_name } = req.body;

  try {
    const userFound = await User.exists({ email });
    if (userFound)
      return res.status(400).json({ message: 'Email ya registrado' });

    const { _doc: newUser } = await User.create({
      email,
      password: new_password,
      first_name,
      last_name,
    });

    console.log(newUser);

    const payload = { email, id: newUser._id };

    const token = jwt.sign({ payload }, JWT_SECRET_CODE, {
      expiresIn: 60 * 60 * 24 * 30,
    });

    return res.status(201).json({ token, message: 'Cuenta creada con éxito' });
  } catch (error) {
    next(error);
  }
};

const logIn = async (req, res, next) => {
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

    const token = jwt.sign({ payload }, JWT_SECRET_CODE, {
      expiresIn: 60 * 60 * 24 * 30,
    });

    return res
      .status(200)
      .json({ token, message: 'Sesión iniciada con éxito' });
  } catch (error) {
    next(error);
  }
};

export { signUp, logIn };
