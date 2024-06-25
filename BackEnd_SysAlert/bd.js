let mysql = require("serverless-mysql");

let config = {
  host: "localhost",
  database: "db_sysalert",
  user: "root",
  password: "",
};

let bd = mysql({
  config: config,
});

module.exports = bd;
