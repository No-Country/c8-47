import { isValidObjectId } from 'mongoose';

import Tag from '../models/Tag.js';

const getTags = async (req, res, next) => {
  const { user } = req;

  try {
    const tagsFound = await Tag.find({ user: user.id });

    if (!tagsFound || tagsFound.length === 0)
      return res.status(200).json({ tags: null });

    return res.status(200).json({ tags: tagsFound });
  } catch (error) {
    next(error);
  }
};

const addTag = async (req, res, next) => {
  const { user } = req;
  const { name, description } = req.body;

  try {
    const newTag = new Tag({
      name,
      description,
      user: user.id,
    });

    await newTag.save();

    return res.status(201).json({
      tag: newTag,
      message: 'Tag agregado con éxito',
    });
  } catch (error) {
    next(error);
  }
};

const editTag = async (req, res, next) => {
  const { name, description } = req.body;
  const { id: tagId } = req.query;

  if (!isValidObjectId(tagId))
    return res.status(422).json({ message: 'Ingrese un ID válido' });

  const options = { new: true };

  try {
    const tagEdited = await Tag.findOneAndUpdate(
      { _id: tagId },
      {
        name,
        description,
      },
      options
    );

    if (!tagEdited)
      return res.status(404).json({ message: 'Tag no encontrado' });

    await tagEdited.save();

    return res.status(201).json({
      tag: tagEdited,
      message: 'Tag modificado con éxito',
    });
  } catch (error) {
    next(error);
  }
};

const deleteTag = async (req, res, next) => {
  const { id: tagId } = req.query;

  if (!isValidObjectId(tagId))
    return res.status(422).json({ message: 'Ingrese un ID válido' });

  try {
    const tagDeleted = await Tag.findOneAndDelete({
      _id: tagId,
    });

    if (!tagDeleted)
      return res.status(404).json({ message: 'Tag no encontrado' });

    return res.status(200).json({
      message: 'Tag eliminado con éxito',
    });
  } catch (error) {
    next(error);
  }
};

export { getTags, addTag, editTag, deleteTag };
