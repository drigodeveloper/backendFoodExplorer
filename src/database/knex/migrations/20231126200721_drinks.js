
exports.up = knex => knex.schema.createTable("drinks", table => {
    table.increments("id");
    table.text("avatar");
    table.text("name");
    table.text("description");
    table.integer("price");

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
});


exports.down = knex => knex.schema.dropTable("drinks");