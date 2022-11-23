import Education from '../models/Education.js';
import User from '../models/User.js';

const getEducation = async (req, res, next) => {
  const { user } = req;

  try {
    const educationFound = await Education.find({ user: user.id });

    if (!educationFound || educationFound.length === 0)
      return res.status(200).json({ education: null });

    return res.status(200).json({ education: educationFound });
  } catch (error) {
    next(error);
  }
};

const addEducation = async (req, res, next) => {
  const { user } = req;
  const { title, institution, start_date, end_date, comment } = req.body;

  try {
    const newEducation = new Education({
      title,
      institution,
      start_date,
      end_date,
      comment,
      user: user.id,
      certification: false, //!VOLVER A VER cambiar nombre certification
    });

    await newEducation.save();

    const userFound = await User.findOne({ _id: user.id });

    userFound.education.push(newEducation._id);
    await userFound.save();

    return res.status(201).json({
      education: newEducation,
      message: 'Educación agregada con éxito',
    });
  } catch (error) {
    next(error);
  }
};

const editEducation = async (req, res, next) => {
  const { id, title, institution, start_date, end_date, comment } = req.body;
  //!VOLVER A VER preguntar si envian id por query

  const options = { new: true };

  try {
    const educationEdited = await Education.findOneAndUpdate(
      { _id: id },
      {
        title,
        institution,
        start_date,
        end_date,
        comment,
      },
      options
    );

    if (!educationEdited)
      return res.status(404).json({ message: 'Educación no encontrada' });

    await educationEdited.save();

    return res.status(201).json({
      education: educationEdited,
      message: 'Educación modificada con éxito',
    });
  } catch (error) {
    next(error);
  }
};

const deleteEducation = async (req, res, next) => {
  const { user } = req;
  const { id } = req.body;
  //!VOLVER A VER preguntar si envian id por query

  try {
    const educationDeleted = await Education.findOneAndDelete({ _id: id });

    if (!educationDeleted)
      return res.status(404).json({ message: 'Educación no encontrada' });

    const userFound = await User.findOne({ _id: user.id });

    const newEducationArray = userFound.education.filter(
      (edu) => edu.toString() !== id
    );

    userFound.education = newEducationArray;
    await userFound.save();

    return res.status(200).json({
      message: 'Educación eliminada con éxito',
    });
  } catch (error) {
    next(error);
  }
};

export { getEducation, addEducation, editEducation, deleteEducation };
