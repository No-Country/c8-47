import { validationResult } from 'express-validator';

const checkValidations = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

export { checkValidations };
