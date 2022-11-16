//import { validationResult } from 'express-validator';

import User from '../models/User.js';
import Contact from '../models/Contact.js';
import Social from '../models/Social.js';
import Personal from '../models/Personal.js';

const getContact = async (req, res, next) => {
  const { user } = req;

  try {
    const contactFound = await Contact.findOne({ user: user.id });

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

const getSocial = async (req, res, next) => {
  const { user } = req;

  try {
    const socialFound = await Social.findOne({ user: user.id });

    //!VOLVER A VER preguntar por respuesta null
    if (!socialFound) return res.status(200).json({ social: null });

    return res.status(200).json({ social: socialFound });
  } catch (error) {
    next(error);
  }
};

//!VOLVER A VER preguntar por modelo Social, agregar un array de urls. Los iconos deben pedirse desde el front
/*const addSocial = async (req, res, next) => {
  const { user } = req;
  const { url } = req.body;

  try {
    const newSocial = new Social({
      url,
      user: user.id,
    });

    await newSocial.save();

    await User.findOneAndUpdate({ _id: user.id }, { social: newSocial._id });

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
}; */

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

// const addPersonal =  async (req, res, next) => {};
// const editPersonal =  async (req, res, next) => {};

export {
  getContact,
  editContact,
  getSocial,
  // addSocial,
  // editSocial,
  getPersonal,
  // addPersonal,
  // editPersonal,
};
