import User from '../models/User.js';
import Contact from '../models/Contact.js';

const addData = async (req, res, next) => {};

const editContact = async (req, res, next) => {
  const { user } = req;

  const options = { upsert: true, new: true };

  try {
    const contactFound = await Contact.findOneAndUpdate(
      { user: user.id },
      req.body,
      options
    );

    console.log('-----contactFound', contactFound);

    return res.status(200).json({ message: 'Contacto modificado con éxito' });
  } catch (error) {
    next(error);
  }
};

export { addData, editContact };
