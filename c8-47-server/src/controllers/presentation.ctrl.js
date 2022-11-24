import { isValidObjectId } from 'mongoose';

import Presentation from '../models/Presentation.js';

const getPresentations = async (req, res, next) => {
  const { user } = req;

  console.log(user.id);

  try {
    const presentationsFound = await Presentation.find({ user: user.id });

    if (!presentationsFound || presentationsFound.length === 0)
      return res.status(200).json({ presentations: null });

    return res.status(200).json({ presentations: presentationsFound });
  } catch (error) {
    next(error);
  }
};

const addPresentation = async (req, res, next) => {
  const { user } = req;
  const { text } = req.body;

  try {
    const newPresentation = new Presentation({
      text,
      user: user.id,
    });

    await newPresentation.save();

    return res.status(201).json({
      presentation: newPresentation,
      message: 'Presentación agregada con éxito',
    });
  } catch (error) {
    next(error);
  }
};

const editPresentation = async (req, res, next) => {
  const { text } = req.body;
  const { id: presentationId } = req.query;

  if (!isValidObjectId(presentationId))
    return res.status(422).json({ message: 'Ingrese un ID válido' });

  const options = { new: true };

  try {
    const presentationEdited = await Presentation.findOneAndUpdate(
      { _id: presentationId },
      { text },
      options
    );

    if (!presentationEdited)
      return res.status(404).json({ message: 'Presentación no encontrada' });

    await presentationEdited.save();

    return res.status(201).json({
      presentation: presentationEdited,
      message: 'Presentación modificada con éxito',
    });
  } catch (error) {
    next(error);
  }
};

const deletePresentation = async (req, res, next) => {
  const { id: presentationId } = req.query;

  if (!isValidObjectId(presentationId))
    return res.status(422).json({ message: 'Ingrese un ID válido' });

  try {
    const presentationDeleted = await Presentation.findOneAndDelete({
      _id: presentationId,
    });

    if (!presentationDeleted)
      return res.status(404).json({ message: 'Presentación no encontrada' });

    return res.status(200).json({
      message: 'Presentación eliminada con éxito',
    });
  } catch (error) {
    next(error);
  }
};

export {
  getPresentations,
  addPresentation,
  editPresentation,
  deletePresentation,
};
