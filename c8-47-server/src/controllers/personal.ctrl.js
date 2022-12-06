import { isValidObjectId } from 'mongoose';

import User from '../models/User.js';
import Personal from '../models/Personal.js';

const getPersonal = async (req, res, next) => {
  const { user } = req;

  try {
    const personalFound = await Personal.findOne({ user: user.id });

    if (!personalFound || personalFound.length === 0)
      return res.status(200).json({ personal: null });

    return res.status(200).json({ personal: personalFound });
  } catch (error) {
    next(error);
  }
};

const addPersonal = async (req, res, next) => {
  const { user } = req;
  /* const { title, about, tag: tagId } = req.body; */
  const { name, birth, email, phone } = req.body;

  /*   if (!isValidObjectId(tagId))
    return res.status(422).json({ message: 'Ingrese un ID válido' });
 */
  try {
    const newPersonal = new Personal({
      name,
      birth,
      email,
      phone,
      user: user.id,
      // tag: tagId,
    });

    await newPersonal.save();

    const userFound = await User.findOne({ _id: user.id });

    userFound.personal = newPersonal._id;
    await userFound.save();

    return res.status(201).json({
      personal: newPersonal,
      message: 'Información personal agregada con éxito',
    });
  } catch (error) {
    next(error);
  }
};

const editPersonal = async (req, res, next) => {
  // const { title, about } = req.body;
  const { name, birth, email, phone } = req.body;
  const { id: personalId } = req.query;

  if (!isValidObjectId(personalId))
    return res.status(422).json({ message: 'Ingrese un ID válido' });

  const options = { new: true };

  try {
    const personalEdited = await Personal.findOneAndUpdate(
      { _id: personalId },
      { name, birth, email, phone },
      options
    );

    if (!personalEdited)
      return res
        .status(404)
        .json({ message: 'Información personal no encontrada' });

    await personalEdited.save();

    return res.status(201).json({
      personal: personalEdited,
      message: 'Información personal modificada con éxito',
    });
  } catch (error) {
    next(error);
  }
};

export { getPersonal, addPersonal, editPersonal };
