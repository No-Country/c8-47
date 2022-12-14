import User from '../models/User.js';

const getUserData = async (req, res, next) => {
  const { user } = req;

  try {
    const userFound = await User.findOne({ _id: user.id })
      .populate({ path: 'address', select: '-user' })
      .populate({ path: 'personal', select: '-user' })
      .populate({ path: 'education', select: '-user' })
      .populate({ path: 'languages', select: '-user' })
      .populate({ path: 'experience', select: '-user' })
      .populate({
        path: 'curriculums',
        select: '-user',
        populate: {
          path: 'selector',
          model: 'Selector',
          select: '-curriculum',
        },
      })
      .populate({ path: 'skills', select: '-user' })
      .populate({ path: 'presentations', select: '-user' })
      .populate({ path: 'tags', select: '-user' });

    return res.json({ user_data: userFound });
  } catch (error) {
    next(error);
  }
};

const modifyPassword = async (req, res, next) => {
  const { user } = req;
  const { password, new_password } = req.body;

  try {
    const userFound = await User.findOne({ _id: user.id });

    const validity = await userFound.comparePassword(password);
    if (!validity) return res.json({ message: 'Contraseña incorrecta' });

    userFound.password = new_password;
    await userFound.save();

    return res.json({ message: 'Contraseña modificada con éxito' });
  } catch (error) {
    next(error);
  }
};

const editName = async (req, res, next) => {
  const { user } = req;
  const { first_name, last_name } = req.body;
  const options = { new: true };

  try {
    const userEdited = await User.findOneAndUpdate(
      { user: user.id },
      { first_name, last_name },
      options
    );

    return res.json({
      user: {
        first_name: userEdited.first_name,
        last_name: userEdited.last_name,
      },
      message: 'Nombre modificado con éxito',
    });
  } catch (error) {
    next(error);
  }
};

const changeImage = async (req, res, next) => {
  const { user } = req;
  const { image_url } = req.body;

  const options = { new: true };

  try {
    await User.findOneAndUpdate({ _id: user.id }, { image_url }, options);

    return res.status(201).json({
      image_url,
      message: 'Imágen actualizada con éxito',
    });
  } catch (error) {
    next(error);
  }
};

export { getUserData, modifyPassword, editName, changeImage };
