const knex = require("knex");
require("dotenv").config();

const db = knex({
  client: "pg",
  connection:
    process.env.DATABASE_URL ||
    `postgres://${process.env.USER}:${process.env.PASSWORD}@5432/propro`,
  searchPath: "public",
});

// const db = knex({
//   client: "pg",
//   connection: {
//     host: process.env.DB_HOST,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     charset: "utf8",
//   },
//   searchPath: "public",
//   migrations: {
//     directory: "./migrations",
//   },
//   seeds: {
//     directory: "./data",
//   },
// });

module.exports = db;
