import User from '../models/User.js';
import Personal from '../models/Personal.js';

const getPersonal = async (req, res, next) => {
  const { user } = req;

  try {
    const personalFound = await Personal.find({ user: user.id });

    //!VOLVER A VER preguntar por respuesta null
    if (!personalFound || personalFound.length === 0)
      return res.status(200).json({ personal: null });

    return res.status(200).json({ personal: personalFound });
  } catch (error) {
    next(error);
  }
};

const addPersonal = async (req, res, next) => {
  const { user } = req;
  const { title, about } = req.body;

  try {
    const newPersonal = new Personal({
      title,
      about,
      user: user.id,
    });

    await newPersonal.save();

    const userFound = await User.findOne({ _id: user.id });

    userFound.personal.push(newPersonal._id);
    await userFound.save();

    return res
      .status(201)
      .json({ personal: newPersonal, message: 'Personal agregado con éxito' });
  } catch (error) {
    next(error);
  }
};

const editPersonal = async (req, res, next) => {
  const { id, title, about } = req.body;
  //!VOLVER A VER preguntar si envian id por query

  const options = { new: true };

  try {
    const personalEdited = await Personal.findOneAndUpdate(
      { _id: id },
      { title, about },
      options
    );

    if (!personalEdited)
      return res.status(404).json({ message: 'Personal no encontrado' });

    await personalEdited.save();

    return res.status(201).json({
      personal: personalEdited,
      message: 'Personal modificado con éxito',
    });
  } catch (error) {
    next(error);
  }
};

const deletePersonal = async (req, res, next) => {
  const { user } = req;
  const { id } = req.body;
  //!VOLVER A VER preguntar si envian id por query

  try {
    const deletedPersonal = await Personal.findOneAndDelete({ _id: id });

    if (!deletedPersonal)
      return res.status(404).json({ message: 'Personal no encontrada' });

    const userFound = await User.findOne({ _id: user.id });

    const newPersonalArray = userFound.personal.filter(
      (pers) => pers.toString() !== id
    );

    userFound.personal = newPersonalArray;
    await userFound.save();

    return res.status(200).json({
      message: 'Personal eliminada con éxito',
    });
  } catch (error) {
    next(error);
  }
};

export { getPersonal, addPersonal, editPersonal, deletePersonal };
