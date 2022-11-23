import Curriculum from '../models/Curriculum.js';
import User from '../models/User.js';

const getCurriculums = async (req, res, next) => {
  const { user } = req;

  try {
    const curriculumsFound = await Curriculum.find({ user: user.id });

    if (!curriculumsFound || curriculumsFound.length === 0)
      return res.status(200).json({ curriculums: null });

    return res.status(200).json({ curriculums: curriculumsFound });
  } catch (error) {
    next(error);
  }
};

const addCurriculum = async (req, res, next) => {
  const { user } = req;
  const { data } = req.body;

  try {
    const newCurriculum = new Curriculum({
      data,
      state: 'generated',
      user: user.id,
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

const editCurriculum = async (req, res, next) => {
  const { state, selector } = req.body;
  const { id: curriculumId } = req.query;
  //!VOLVER A VER testear query id

  const options = { new: true };

  try {
    const curriculumEdited = await Curriculum.findOneAndUpdate(
      { _id: curriculumId },
      {
        state,
        selector,
      },
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
  //!VOLVER A VER testear query id

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
      (edu) => edu.toString() !== curriculumId
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

export { getCurriculums, addCurriculum, editCurriculum, deleteCurriculum };
