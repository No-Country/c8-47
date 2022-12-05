import Contact from '../models/Contact.js';

const addSocial = async (req, res, next) => {
  const { user } = req;
  const { socials } = req.body;

  try {
    const contactFound = await Contact.findOne({
      user: user.id,
    });

    if (!contactFound) {
      const newContact = new Contact({
        socials,
        user: user.id,
      });

      await newContact.save();

      return res.status(201).json({
        contact: newContact,
        message: 'Contacto agregado con éxito',
      });
    }

    contactFound.socials = socials;
    contactFound.save();

    return res.status(201).json({
      contact: contactFound,
      message: 'Contacto modificado con éxito',
    });
  } catch (error) {
    next(error);
  }
};

export { addSocial };
