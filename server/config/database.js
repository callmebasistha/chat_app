require("dotenv").config();
const mysql = require("mysql");

// MYSQL database connection
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port:process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.MYSQL_DB
  });


  module.exports = pool;