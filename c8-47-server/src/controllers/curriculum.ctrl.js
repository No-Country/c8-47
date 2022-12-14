import { isValidObjectId } from 'mongoose';

import Curriculum from '../models/Curriculum.js';
import User from '../models/User.js';

const getCurriculums = async (req, res, next) => {
  const { user } = req;

  try {
    const curriculumsFound = await Curriculum.find({
      user: user.id,
      deleted_at: 0,
    }).populate('selector');

    if (!curriculumsFound || curriculumsFound.length === 0)
      return res.status(200).json({ curriculums: null });

    return res.status(200).json({ curriculums: curriculumsFound });
  } catch (error) {
    next(error);
  }
};

const addCurriculum = async (req, res, next) => {
  const { user } = req;
  const { data, tag: tagId } = req.body;

  if (!isValidObjectId(tagId))
    return res.status(422).json({ message: 'Ingrese un ID válido' });

  try {
    const newCurriculum = new Curriculum({
      data,
      status: 'generated',
      user: user.id,
      tag: tagId,
    });

    await newCurriculum.save();

    const userFound = await User.findOne({ _id: user.id });

    userFound.curriculums.push(newCurriculum._id);
    await userFound.save();

    return res.status(201).json({
      curriculum: newCurriculum,
      message: 'Curriculum generado con éxito',
    });
  } catch (error) {
    next(error);
  }
};

const editCurriculumStatus = async (req, res, next) => {
  const { status } = req.body;
  const { id: curriculumId } = req.query;

  if (!isValidObjectId(curriculumId))
    return res.status(422).json({ message: 'Ingrese un ID válido' });

  const options = { new: true };

  try {
    const curriculumEdited = await Curriculum.findOneAndUpdate(
      { _id: curriculumId },
      { status },
      options
    );

    if (!curriculumEdited)
      return res.status(404).json({ message: 'Curriculum no encontrado' });

    await curriculumEdited.save();

    return res.status(201).json({
      curriculum: curriculumEdited,
      message: 'Curriculum modificado con éxito',
    });
  } catch (error) {
    next(error);
  }
};

const deleteCurriculum = async (req, res, next) => {
  const { user } = req;
  const { id: curriculumId } = req.query;

  if (!isValidObjectId(curriculumId))
    return res.status(422).json({ message: 'Ingrese un ID válido' });

  try {
    const curriculumDeleted = await Curriculum.findOneAndUpdate(
      {
        _id: curriculumId,
      },
      {
        deleted_at: Date.now(),
      }
    );

    if (!curriculumDeleted)
      return res.status(404).json({ message: 'Curriculum no encontrado' });

    const userFound = await User.findOne({ _id: user.id });

    const newCurriculumArray = userFound.curriculums.filter(
      (cv) => cv.toString() !== curriculumId
    );

    userFound.curriculums = newCurriculumArray;
    await userFound.save();

    return res.status(200).json({
      message: 'Curriculum eliminado con éxito',
    });
  } catch (error) {
    next(error);
  }
};

export {
  getCurriculums,
  addCurriculum,
  editCurriculumStatus,
  deleteCurriculum,
};
