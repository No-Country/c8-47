import User from '../models/User.js';
import Address from '../models/Address.js';

const getAddress = async (req, res, next) => {
  const { user } = req;

  try {
    const addressFound = await Address.findOne({ user: user.id });

    if (!addressFound) return res.status(200).json({ address: null });

    return res.status(200).json({ address: addressFound });
  } catch (error) {
    next(error);
  }
};

const editAddress = async (req, res, next) => {
  const { user } = req;
  const { country, state, city, zip_code, street_name, street_number, door } =
    req.body;

  const options = { upsert: true, new: true };

  try {
    const addressEdited = await Address.findOneAndUpdate(
      { user: user.id },
      { country, state, city, zip_code, street_name, street_number, door },
      options
    );

    await User.findOneAndUpdate(
      { _id: user.id },
      { address: addressEdited._id },
      options
    );

    return res.status(201).json({
      address: addressEdited,
      message: 'Dirección modificada con éxito',
    });
  } catch (error) {
    next(error);
  }
};

export { getAddress, editAddress };
