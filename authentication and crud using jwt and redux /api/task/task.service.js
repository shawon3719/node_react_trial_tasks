const pool = require("../../config/database");

module.exports = {
  createTaskInfo: (data, callBack) => {
    pool.query(
      `insert into task(title, description)
            values(?,?)`,
      [
        data.title,
        data.description
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  //Get all taskInfo
  getTaskInfo: (callBack) => {
    pool.query(
      `select id, title, description from task`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  //Get taskInfo By ID
  getTaskInfoById: (id, callBack) => {
    pool.query(
      `select id, title, description from task where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  //Update taskInfo By ID
  updateTaskInfo: (data, callBack) => {
    pool.query(
      `update task set title=?, description=? where id=?`,
      [
        data.title,
        data.description,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  //Delete taskInfo By ID
  deleteTaskInfo: (id, callBack) => {
    pool.query(
      `delete from task where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
