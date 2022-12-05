import { isValidObjectId } from 'mongoose';

import User from '../models/User.js';
import Personal from '../models/Personal.js';

const getPersonals = async (req, res, next) => {
  const { user } = req;

  try {
    const personalsFound = await Personal.find({ user: user.id });

    if (!personalsFound || personalsFound.length === 0)
      return res.status(200).json({ personals: null });

    return res.status(200).json({ personals: personalsFound });
  } catch (error) {
    next(error);
  }
};

const addPersonal = async (req, res, next) => {
  const { user } = req;
  const { title, about, tag: tagId } = req.body;

  if (!isValidObjectId(tagId))
    return res.status(422).json({ message: 'Ingrese un ID válido' });

  try {
    const newPersonal = new Personal({
      title,
      about,
      user: user.id,
      tag: tagId,
    });

    await newPersonal.save();

    const userFound = await User.findOne({ _id: user.id });

    userFound.personal.push(newPersonal._id);
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
  const { title, about } = req.body;
  const { id: personalId } = req.query;

  if (!isValidObjectId(personalId))
    return res.status(422).json({ message: 'Ingrese un ID válido' });

  const options = { new: true };

  try {
    const personalEdited = await Personal.findOneAndUpdate(
      { _id: personalId },
      { title, about },
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

const deletePersonal = async (req, res, next) => {
  const { user } = req;
  const { id: personalId } = req.query;

  if (!isValidObjectId(personalId))
    return res.status(422).json({ message: 'Ingrese un ID válido' });

  try {
    const personalDeleted = await Personal.findOneAndDelete({
      _id: personalId,
    });

    if (!personalDeleted)
      return res
        .status(404)
        .json({ message: 'Información personal no encontrada' });

    const userFound = await User.findOne({ _id: user.id });

    const newPersonalArray = userFound.personal.filter(
      (pers) => pers.toString() !== personalId
    );

    userFound.personal = newPersonalArray;
    await userFound.save();

    return res.status(200).json({
      message: 'Información personal eliminada con éxito',
    });
  } catch (error) {
    next(error);
  }
};

export { getPersonals, addPersonal, editPersonal, deletePersonal };
