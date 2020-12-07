exports.up = function(knex) {
  return knex.schema.hasTable("product").then(function(exists) {
    if (!exists) {
      return knex.schema.createTable("product", (table) => {
        table.increments("product_id").primary().unique();
        table.string("name").notNullable();
        table.string("image");
        table.text("description");
        table.float("price").notNullable();
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
