const joi = require("joi");

const schema = {
  task: joi.object({
    title: joi.string().max(200).required(),
    description: joi.string(),
  }),
};

module.exports = schema;
