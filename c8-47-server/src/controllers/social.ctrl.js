import Contact from '../models/Contact.js';
import Social from '../models/Social.js';

const getSocial = async (req, res, next) => {
  const { user } = req;

  try {
    const socialFound = await Social.find({ user: user.id });

    //!VOLVER A VER preguntar por respuesta null
    if (!socialFound || socialFound.length === 0)
      return res.status(200).json({ social: null });

    console.log('---------socialFound', socialFound);

    return res.status(200).json({ social: socialFound });
  } catch (error) {
    next(error);
  }
};

const addSocial = async (req, res, next) => {
  const { user } = req;
  const { url } = req.body;

  try {
    const newSocial = new Social({
      url,
      user: user.id,
    });

    await newSocial.save();

    const contactFound = await Contact.findOne({ user: user.id });

    if (contactFound) {
      contactFound.socials.push(newSocial._id);
      await contactFound.save();
    } else {
      const newContact = new Contact({ user: user.id });
      newContact.socials.push(newSocial._id);
      await newContact.save();
    }

    return res.status(201).json({
      social: newSocial,
      message: 'Social agregada con éxito',
    });
  } catch (error) {
    next(error);
  }
};

const editSocial = async (req, res, next) => {
  const { user } = req;

  const options = { new: true };

  try {
    const socialEdited = await Social.findOneAndUpdate(
      { user: user.id },
      req.body,
      options
    );

    await Contact.findOneAndUpdate(
      { _id: user.id },
      { social: socialEdited._id },
      options
    );

    return res.status(201).json({
      social: socialEdited,
      message: 'Contacto modificado con éxito',
    });
  } catch (error) {
    next(error);
  }
};

export { getSocial, addSocial, editSocial };
