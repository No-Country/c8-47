import User from '../models/User.js';
import Personal from '../models/Personal.js';

const getPersonal = async (req, res, next) => {
  const { user } = req;

  try {
    const personalFound = await Personal.findOne({ user: user.id });

    //!VOLVER A VER preguntar por respuesta null
    if (!personalFound) return res.status(200).json({ personal: null });

    return res.status(200).json({ personal: personalFound });
  } catch (error) {
    next(error);
  }
};

//!VOLVER A VER preguntar por modelo Personal, si es uno por usuario o puede haber varios
const addPersonal = async (req, res, next) => {
  const { user } = req;
  const { heading, description } = req.body;

  try {
    const newPersonal = new Personal({
      heading,
      description,
      user: user.id,
    });

    await newPersonal.save();

    await User.findOneAndUpdate(
      { _id: user.id },
      { personal: newPersonal._id }
    );

    return res
      .status(201)
      .json({ newPersonal, message: 'Personal agregado con éxito' });
  } catch (error) {
    next(error);
  }
};

const editPersonal = async (req, res, next) => {
  const { user } = req;

  const options = { new: true };

  try {
    const personalEdited = await Personal.findOneAndUpdate(
      { user: user.id },
      req.body,
      options
    );

    await User.findOneAndUpdate(
      { _id: user.id },
      { personal: personalEdited._id },
      options
    );

    return res.status(201).json({
      personal: personalEdited,
      message: 'Personal modificado con éxito',
    });
  } catch (error) {
    next(error);
  }
};

export { getPersonal, addPersonal, editPersonal };
