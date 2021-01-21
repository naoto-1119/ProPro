require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      charset: "utf8",
    },
    searchPath: "public",
    migrations: {
      directory: "./migrations",
      loadExtensions: [".js"],
    },
    seeds: {
      directory: "./data",
      loadExtensions: [".js"],
    },
  },
  production: {
    client: "pg",
    connection:
      process.env.DATABASE_URL ||
      `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost/propro`,
    searchPath: "public",
  },
};
