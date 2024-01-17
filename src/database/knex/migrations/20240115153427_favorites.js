exports.up = knex => knex.schema.createTable("favorites", table => {
    table.increments("id").notNullable();
    table.text("avatar").notNullable();
    table.text("title").notNullable();
    table.integer('menu_id').references('id').inTable('menu').onDelete("CASCADE");
    table.integer('user_id').references('id').inTable('users').onDelete("CASCADE");

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("menu");
