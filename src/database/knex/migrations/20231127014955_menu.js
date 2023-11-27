
exports.up = knex => knex.schema.createTable("menu", table => {
    table.increments("id");
    table.text("avatar");
    table.text("title");
    table.text("description");
    table.text("category");

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
});


exports.down = knex => knex.schema.dropTable("menu");