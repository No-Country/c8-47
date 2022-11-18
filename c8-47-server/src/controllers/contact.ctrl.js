import User from '../models/User.js';
import Contact from '../models/Contact.js';

const getContact = async (req, res, next) => {
  const { user } = req;

  try {
    const contactFound = await Contact.findOne({ user: user.id }).populate(
      //!VOLVER A VER al popular quitar el campo contact
      'socials'
    );

    //!VOLVER A VER preguntar por respuesta null
    if (!contactFound) return res.status(200).json({ contact: null });

    return res.status(200).json({ contact: contactFound });
  } catch (error) {
    next(error);
  }
};

const editContact = async (req, res, next) => {
  const { user } = req;

  const options = { upsert: true, new: true };

  try {
    const contactEdited = await Contact.findOneAndUpdate(
      { user: user.id },
      req.body,
      options
    );

    await User.findOneAndUpdate(
      { _id: user.id },
      { contact: contactEdited._id },
      options
    );

    return res.status(201).json({
      contact: contactEdited,
      message: 'Contacto modificado con éxito',
    });
  } catch (error) {
    next(error);
  }
};

export { getContact, editContact };
