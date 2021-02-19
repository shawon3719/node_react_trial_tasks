const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into registration(name, email, phone, country, password)
            values(?,?,?,?,?)`,

      [
        data.name,
        data.email,
        data.phone,
        data.country,
        data.password,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  //Get all Users
  getUsers: (callBack) => {
    pool.query(
      `select id, name, email, phone, country from registration`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  //Get User By ID
  getUserByUserId: (id, callBack) => {
    pool.query(
      `select id, name, email, phone, country from registration where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  //Update User By ID
  updateUser: (data, callBack) => {
    pool.query(
      `update registration set name=?, email=?, phone=?, country=?, password=? where id=?`,
      [
        data.name,
        data.email,
        data.phone,
        data.country,
        data.password,
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
  //Delete User By ID
  deleteUser: (id, callBack) => {
    pool.query(
      `delete from registration where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  //Get Login Info
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from registration where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
