import * as dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

import User from "../models/User.js";

const { JWT_SECRET_CODE } = process.env;

const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    console.log("authHeader", authHeader);

    if (!authHeader)
      return res.status(400).json({ message: "Header no recibido" });

    const token = authHeader.split(" ")[1];
    console.log("---------1");

    if (!token) return res.status(400).json({ message: "Token no recibido" });

    try {
      const userDecoded = jwt.verify(token, JWT_SECRET_CODE);
      console.log("---------2");

      req.user = userDecoded.payload;

      console.log("userDecoded", req.user);

      const userFound = await User.findById(req.user.id);
      if (!userFound) {
        return res.status(404).json({ message: "Cuenta no encontrada" });
      }
      console.log("---------3");

      req.user.role = userFound.role;
    } catch (error) {
      console.log("---------4");
      if (error.name === "TokenExpiredError")
        return res.status(401).json({
          message: "Sesión expirada, vuelve a iniciar sesión",
          expiredToken: true,
        });
      console.log("---------5");

      return res.status(401).json({ message: "Token inválido" });
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: "Sin autorización" });
  }
};

const verifyAdmin = async (req, res, next) => {
  if (req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({ message: "Sin autorización" });
  }
};

export { verifyToken, verifyAdmin };
