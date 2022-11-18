import Education from '../models/Education.js';
import User from '../models/User.js';

const getEducation = async (req, res, next) => {
  const { user } = req;

  try {
    const educationFound = await Education.find({ user: user.id });

    //!VOLVER A VER preguntar por respuesta null
    if (!educationFound || educationFound.length === 0)
      return res.status(200).json({ education: null });

    return res.status(200).json({ education: educationFound });
  } catch (error) {
    next(error);
  }
};

export {
  getEducation,
  // addEducation,
  // editEducation,
  // deleteEducation
};
