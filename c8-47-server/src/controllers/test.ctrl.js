import User from '../models/User.js';

const testController = async (req, res) => {
  return res.send('Now you are on /test');
};

const authenticationRequired = async (req, res) => {
  return res.send('you are authenticated /test/auth');
};

const adminRequired = async (req, res) => {
  return res.send('welcome admin /test/admin');
};

const userData = async (req, res, next) => {
  const { user } = req;

  try {
    const userFound = await User.findOne({ _id: user.id })
      /* .populate('contact')
      .populate('personal')
      .populate('education')
      .populate('languages')
      .populate('experience')
      .populate({
        path: 'curriculums',
        populate: {
          path: 'selector',
          model: 'Selector',
        },
      }) */
      .populate('presentations');

    //!VOLVER A VER quitar campos al popular

    return res.json({ userFound });
  } catch (error) {
    next(error);
  }
};

export { testController, authenticationRequired, adminRequired, userData };
