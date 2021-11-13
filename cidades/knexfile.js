const path = require("path");

module.exports = {
  client: "pg",
  connection: {
    host: process.env.DB_HOST || "localhost",
    port: process.env.PORT || 5432,
    database: "api_desaparecidos",
    user: "root",
    password: "root",
  },
  pool: {
    min: 2,
    max: 10,
  },
};
