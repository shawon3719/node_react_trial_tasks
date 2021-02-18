const {
  createTaskInfo,
  getTaskInfo,
  getTaskInfoById,
  updateTaskInfo,
  deleteTaskInfo
} = require("./employee.category.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { addTaskValidation } = require("../../validation/task/task.validation");

router.get("/all", getTaskInfo);
router.post("/create",checkToken, addTaskValidation, createTaskInfo);
router.get("/task/:id", checkToken, getTaskInfoById);
router.patch("/update", checkToken, updateTaskInfo);
router.delete("/delete/:id", checkToken, deleteTaskInfo);

module.exports = router;
