require("dotenv").config();
const express = require("express");
const { createPool } = require("mysql");

const pool = createPool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB,
  connectionLimit: 10,
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

module.exports = pool;
