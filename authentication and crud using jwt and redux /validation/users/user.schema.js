const joi = require("joi");

const schema = {
  user: joi.object({
    name: joi.string().max(100).required(),
	 country: joi.string().max(100).required(),
    email: joi.string().email().required(),
    password: joi
      .string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    phone: joi
      .number()
      .integer()
      .min(00000000001)
      .message("Invalid Phone Number")
      .max(99999999999)
      .required(),
  }),
};

module.exports = schema;