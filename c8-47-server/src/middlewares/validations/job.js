import { check } from 'express-validator';

import { checkValidations } from './checkValidations.js';

const titleValidation = check('title')
  .trim()
  .notEmpty()
  .withMessage('Ingresa el título')
  .isLength({ max: 64 })
  .withMessage('El título acepta como máximo 64 caracteres')
  .escape();

const organizationValidation = check('organization')
  .trim()
  .notEmpty()
  .withMessage('Ingresa la organización')
  .isLength({ max: 64 })
  .withMessage('La organización acepta como máximo 64 caracteres')
  .escape();

const startDateValidation = check('start_date')
  .trim()
  .notEmpty()
  .withMessage('Ingresa la fecha de inicio')
  .isLength({ max: 10 })
  .withMessage('La fecha de inicio acepta como máximo 10 caracteres');

const endDateValidation = check('end_date')
  .trim()
  .notEmpty()
  .withMessage('Ingresa la fecha de finalización')
  .isLength({ max: 10 })
  .withMessage('La fecha de finalización acepta como máximo 10 caracteres');

const tasksValidation = check('tasks.*')
  .trim()
  .isLength({ max: 128 })
  .withMessage('La tarea acepta como máximo 128 caracteres')
  .escape();

const mainJobValidation = check('main_job')
  .isBoolean()
  .withMessage('main_job solo acepta como valor "true" o "false"');

const jobValidation = [
  titleValidation,
  organizationValidation,
  startDateValidation,
  endDateValidation,
  tasksValidation,
  mainJobValidation,
  checkValidations,
];

export { jobValidation };
