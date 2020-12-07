exports.up = function(knex) {
  return knex.schema.hasTable("users").then(function(exists) {
    if (!exists) {
      return knex.schema.createTable("users", (table) => {
        table.increments("user_id").primary().unique();

        table.string("email").unique().notNullable();
      });
    }
  });
};

exports.down = function(knex) {
  return knex.schema.hasTable("users").then(function(exists) {
    if (exists) {
      return knex.schema.dropTable("users");
    }
  });
};
