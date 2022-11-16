import { validationResult } from 'express-validator';

//import User from '../models/User.js';
import Contact from '../models/Contact.js';

const editContact = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

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

export { editContact };
