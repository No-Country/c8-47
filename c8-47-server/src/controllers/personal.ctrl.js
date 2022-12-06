import User from '../models/User.js';
import Personal from '../models/Personal.js';

const getPersonal = async (req, res, next) => {
  const { user } = req;

  try {
    const personalFound = await Personal.find({ user: user.id });

    if (!personalFound || personalFound.length === 0)
      return res.status(200).json({ personal: null });

    return res.status(200).json({ personal: personalFound });
  } catch (error) {
    next(error);
  }
};

const addPersonal = async (req, res, next) => {
  const { user } = req;
  const { name, birth, email, phone } = req.body;

  const options = { upsert: true, new: true };

  try {
    const personalEdited = await Personal.findOneAndUpdate(
      { user: user.id },
      { name, birth, email, phone },
      options
    );

    await User.findOneAndUpdate(
      { _id: user.id },
      { personal: personalEdited._id },
      options
    );

    return res.status(201).json({
      personal: personalEdited,
      message: 'Información personal agregada con éxito',
    });
  } catch (error) {
    next(error);
  }
};

export { getPersonal, addPersonal };
