exports.up = function(knex) {
  return knex.schema.hasTable("profile").then(function(exists) {
    if (!exists) {
      return knex.schema.createTable("profile", (table) => {
        table.increments("profile_id").primary().unique();
        table.string("user_name").unique();
        table.text("description").nullable();
        table.string("twitter_screen_name").nullable();
      });
    }
  });
};

exports.down = function(knex) {
  return knex.schema.hasTable("profile").then(function(exists) {
    if (exists) {
      return knex.schema.dropTable("profile");
    }
  });
};
