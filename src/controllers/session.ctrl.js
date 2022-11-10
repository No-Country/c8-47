import * as dotenv from "dotenv";
dotenv.config();

const User = require("../models/User");

const { JWT_SECRET_CODE } = process.env;

const signUp = async (req, res, next) => {
  const { email, password, rep_password, first_name, last_name } = req.body;

  return res.send("Account created");
};

const logIn = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.json({ message: "Por favor ingresa tu email y contraseña" });

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
