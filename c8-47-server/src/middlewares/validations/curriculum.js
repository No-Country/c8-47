import { check } from 'express-validator';

import { checkValidations } from './checkValidations.js';

const dataReceivedValidation = check('data')
  .trim()
  .notEmpty()
  .withMessage('Ingresa DATA')
  .escape();

const statusReceivedValidation = check('status')
  .trim()
  .optional({ checkFalsy: true })
  .isIn(['generated', 'sended', 'rejected', 'interview'])
  .withMessage('Ingresa un estado válido')
  .escape();

const addCvValidation = [dataReceivedValidation, checkValidations];

const statusValidation = [statusReceivedValidation, checkValidations];

export { addCvValidation, statusValidation };
