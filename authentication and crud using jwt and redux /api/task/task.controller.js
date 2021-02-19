require("dotenv").config();
const {
  createTaskInfo,
  getTaskInfo,
  getTaskInfoById,
  updateTaskInfo,
  deleteTaskInfo
} = require("./task.service");
require("dotenv").config();
module.exports = {
  //Create task
  createTaskInfo: (req, res) => {
    const body = req.body;
    createTaskInfo(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        message: "Task has been created successfully",
      });
    });
  },

  //Get task info by Id
  getTaskInfoById: (req, res) => {
    const id = req.params.id;
    getTaskInfoById(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record Not Found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  //Get all task info
  getTaskInfo: (req, res) => {
    getTaskInfo((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  //update task info
  updateTaskInfo: (req, res) => {
    const body = req.body;
    updateTaskInfo(body, (err, results) => {
      if (err) {
        console.log(err);
        return false;
      }
      return res.json({
        success: 1,
        message: "Task updated successfully",
      });
    });
  },
  //Delete Task info by Id
  deleteTaskInfo: (req, res) => {
    const id = req.params.id;
    deleteTaskInfo(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Task has been deleted",
        });
      }
      return res.json({
        success: 1,
        message: "Task has been deleted successfully",
      });
    });
  },
};
