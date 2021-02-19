const { task } = require("./task.schema");

module.exports = {
  addTaskValidation: async (req, res, next) => {
    const value = await task.validate(req.body);
    if (value.error) {
      res.json({
        success: 0,
        message: value.error.details[0].message,
      });
    } else {
      next();
    }
  },
};