const Joi = require('joi');

const validator = Joi.object({
  full_name: Joi.string().required(),
  phone: Joi.number().required(),
  email: Joi.string().email().required(),
  age: Joi.number().min(21),
  experience: Joi.number().min(0).max(21),
  yearly_income: Joi.number().min(0).max(1000000),
  has_children: Joi.boolean(),
  license_states: Joi.string(),
  expiration_date: Joi.date().greater('now'),
  license_number: Joi.string().min(6).max(6),
  duplicate_with: Joi.number(),
});

module.exports = { validator };
