import { isValidObjectId } from 'mongoose';

import Language from '../models/Language.js';
import User from '../models/User.js';

const getLanguages = async (req, res, next) => {
  const { user } = req;

  try {
    const languagesFound = await Language.find({ user: user.id });

    if (!languagesFound || languagesFound.length === 0)
      return res.status(200).json({ languages: null });

    return res.status(200).json({ languages: languagesFound });
  } catch (error) {
    next(error);
  }
};

const addLanguage = async (req, res, next) => {
  const { user } = req;
  const { language, level } = req.body;

  try {
    const newLanguage = new Language({
      language,
      level,
      user: user.id,
    });

    await newLanguage.save();

    const userFound = await User.findOne({ _id: user.id });

    userFound.languages.push(newLanguage._id);
    await userFound.save();

    return res.status(201).json({
      language: newLanguage,
      message: 'Idioma agregado con éxito',
    });
  } catch (error) {
    next(error);
  }
};

const editLanguage = async (req, res, next) => {
  const { language, level } = req.body;
  const { id: languageId } = req.query;

  if (!isValidObjectId(languageId))
    return res.status(422).json({ message: 'Ingrese un ID válido' });

  const options = { new: true };

  try {
    const languageEdited = await Language.findOneAndUpdate(
      { _id: languageId },
      {
        language,
        level,
      },
      options
    );

    if (!languageEdited)
      return res.status(404).json({ message: 'Idioma no encontrado' });

    await languageEdited.save();

    return res.status(201).json({
      language: languageEdited,
      message: 'Idioma modificado con éxito',
    });
  } catch (error) {
    next(error);
  }
};

const deleteLanguage = async (req, res, next) => {
  const { user } = req;
  const { id: languageId } = req.query;

  if (!isValidObjectId(languageId))
    return res.status(422).json({ message: 'Ingrese un ID válido' });

  try {
    const languageDeleted = await Language.findOneAndDelete({
      _id: languageId,
    });

    if (!languageDeleted)
      return res.status(404).json({ message: 'Idioma no encontrado' });

    const userFound = await User.findOne({ _id: user.id });

    const newLanguagesArray = userFound.languages.filter(
      (lang) => lang.toString() !== languageId
    );

    userFound.languages = newLanguagesArray;
    await userFound.save();

    return res.status(200).json({
      message: 'Idioma eliminado con éxito',
    });
  } catch (error) {
    next(error);
  }
};

export { getLanguages, addLanguage, editLanguage, deleteLanguage };
