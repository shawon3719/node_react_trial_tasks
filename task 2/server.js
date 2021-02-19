require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
const taskRouter = require("./api/task/task.router");
var cors = require('cors');


app.use(cors());
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/tasks", taskRouter);

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running on port :", process.env.APP_PORT);
});
