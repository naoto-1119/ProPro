exports.up = function(knex) {
  return knex.schema.createTable("order", function(table) {
    table
      .increments("order_id")
      .primary()
      .unique();
    table.timestamp("order_created_at").defaultTo(knex.fn.now());
    table.string("order_status");
    table
      .integer("profile_id")
      .notNullable()
      .references("profile_id")
      .inTable("profile");
    table
      .integer("product_id")
      .notNullable()
      .references("product_id")
      .inTable("product");
  });
};

exports.down = function(knex) {};
