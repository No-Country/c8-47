import { isValidObjectId } from 'mongoose';

import Selector from '../models/Selector.js';
import Curriculum from '../models/Curriculum.js';

const getSelectors = async (req, res, next) => {
  const { user } = req;

  try {
    const selectorsFound = await Selector.find({ user: user.id });

    if (!selectorsFound || selectorsFound.length === 0)
      return res.status(200).json({ selectors: null });

    return res.status(200).json({ selectors: selectorsFound });
  } catch (error) {
    next(error);
  }
};

const addSelector = async (req, res, next) => {
  const { organization, name, email, curriculumId } = req.body;

  try {
    const newSelector = new Selector({
      organization,
      name,
      email,
      curriculum: curriculumId,
    });

    await newSelector.save();

    const curriculumFound = await Curriculum.findOne({ _id: curriculumId });

    curriculumFound.selector = newSelector._id;
    await curriculumFound.save();

    return res.status(201).json({
      selector: newSelector,
      message: 'Selector agregado con éxito',
    });
  } catch (error) {
    next(error);
  }
};

const editSelector = async (req, res, next) => {
  const { organization, name, email } = req.body;
  const { id: selectorId } = req.query;

  if (!isValidObjectId(selectorId))
    return res.status(422).json({ message: 'Ingrese un ID válido' });

  const options = { new: true };

  try {
    const selectorEdited = await Selector.findOneAndUpdate(
      { _id: selectorId },
      {
        organization,
        name,
        email,
      },
      options
    );

    if (!selectorEdited)
      return res.status(404).json({ message: 'Selector no encontrado' });

    await selectorEdited.save();

    return res.status(201).json({
      selector: selectorEdited,
      message: 'Selector modificado con éxito',
    });
  } catch (error) {
    next(error);
  }
};

const deleteSelector = async (req, res, next) => {
  const { id: selectorId } = req.query;

  if (!isValidObjectId(selectorId))
    return res.status(422).json({ message: 'Ingrese un ID válido' });

  const options = { new: true };

  try {
    const selectorDeleted = await Selector.findOneAndDelete({
      _id: selectorId,
    });

    if (!selectorDeleted)
      return res.status(404).json({ message: 'Selector no encontrado' });

    const curriculumEdited = await Curriculum.findOneAndUpdate(
      {
        _id: selectorDeleted.curriculum,
      },
      { selector: null },
      options
    );

    return res.status(200).json({
      curriculum: curriculumEdited,
      message: 'Selector eliminado con éxito',
    });
  } catch (error) {
    next(error);
  }
};

export { getSelectors, addSelector, editSelector, deleteSelector };
