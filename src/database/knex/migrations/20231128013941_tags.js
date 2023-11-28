exports.up = knex => knex.schema.createTable("tags", table => {
    table.increments("id");
    table.text("name");
    table.integer('menu_id').references('id').inTable('menu').onDelete("CASCADE")

    table.timestamp("created_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("tags");
