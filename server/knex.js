const knex = require("knex");
const knexConfig = require("../knexfile.js");
require("dotenv").config();

let db;

if (
  process.env
    .DATABASE_URL /*Production deployment is done in Heroku using DATABASE_URL*/
) {
  db = knex(knexConfig.production);
} else {
  db = knex(knexConfig.development);
}

module.exports = db;
