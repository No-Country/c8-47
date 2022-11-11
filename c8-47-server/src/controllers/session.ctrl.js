import * as dotenv from "dotenv";
dotenv.config();
import { validationResult } from "express-validator";

const User = require("../models/User");

const { JWT_SECRET_CODE } = process.env;

const signUp = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() });
  }

  const { email, password, first_name, last_name } = req.body;

  try {
    const userFound = await User.exists({ email });
    if (userFound) return res.json({ message: "Email ya registrado" });

    const newUser = await User.create({
      email,
      password,
      first_name,
      last_name,
    });

    return res.json({ message: "Cuenta creada con éxito" });
  } catch (error) {
    next(error);
  }
};

const logIn = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  /* if (!email || !password)
    return res.json({ message: "Por favor ingresa tu email y contraseña" }); */

  try {
    const userFound = await User.findOne({ email });
    if (!userFound)
      return res.json({ message: "Email o contraseña incorrectos" });

    const validity = await User.comparePassword(password);
    if (!validity)
      return res.json({ message: "Email o contraseña incorrectos" });

    //!VOLVER A VER ver que usar para la firma
    const token = jwt.sign({ email }, JWT_SECRET_CODE, {
      expiresIn: 864000,
    });

    return res.json({ token, message: "Sesión iniciada con éxito" });
  } catch (error) {
    next(error);
  }
};

export { signUp, logIn };
