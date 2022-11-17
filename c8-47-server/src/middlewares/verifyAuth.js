import * as dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

import User from '../models/User.js';

const { JWT_SECRET_CODE } = process.env;

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(400).json({ message: 'Header no recibido' });

  const token = authHeader.split(' ')[1];

  if (!authHeader.toLowerCase().startsWith('bearer'))
    return res.status(400).json({ message: 'Bearer no recibido' });

  if (!token) return res.status(400).json({ message: 'Token no recibido' });

  try {
    const userDecoded = jwt.verify(token, JWT_SECRET_CODE);

    if (!userDecoded.payload.id)
      return res.status(401).json({ message: 'Token inválido' });

    req.user = userDecoded.payload;

    const userFound = await User.findOne({ _id: req.user.id });
    if (!userFound) {
      return res.status(404).json({ message: 'Cuenta no encontrada' });
    }

    req.user.role = userFound.role;

    next();
  } catch (error) {
    next(error);
  }
};

const verifyAdminFunction = async (req, res, next) => {
  if (req.user.role === 'admin') {
    next();
  } else {
    return res.status(403).json({ message: 'Sin autorización' });
  }
};

const verifyAdmin = [verifyToken, verifyAdminFunction];

export { verifyToken, verifyAdmin };
