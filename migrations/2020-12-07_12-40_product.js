exports.up = function(knex) {
  return knex.schema.hasTable("product").then(function(exists) {
    if (!exists) {
      return knex.schema.createTable("product", (table) => {
        table
          .increments("product_id")
          .primary()
          .unique();
        table.string("name").notNullable();
        table.string("image");
        table.string("category").notNullable();
        table.text("description");
        table.float("price").notNullable();
        table
          .integer("user_id")
          .notNullable()
          .references("user_id")
          .inTable("users")
          .onDelete("cascade");
      });
    }
  });
};

exports.down = function(knex) {
  return knex.schema.hasTable("product").then(function(exists) {
    if (exists) {
      return knex.schema.dropTable("product");
    }
  });
};
