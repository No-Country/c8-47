import Personal from '../models/Personal.js';

const addSocial = async (req, res, next) => {
  const { user } = req;
  const { socials } = req.body;

  try {
    const personalFound = await Personal.findOne({
      user: user.id,
    });

    if (!personalFound) {
      const newPersonal = new Personal({
        socials,
        user: user.id,
      });

      await newPersonal.save();

      return res.status(201).json({
        personal: newPersonal,
        message: 'Información personal agregada con éxito',
      });
    }

    personalFound.socials = socials;
    personalFound.save();

    return res.status(201).json({
      personal: personalFound,
      message: 'Información personal modificada con éxito',
    });
  } catch (error) {
    next(error);
  }
};

export { addSocial };
