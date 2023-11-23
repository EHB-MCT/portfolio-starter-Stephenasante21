// migrations/20231108120000_create_tables_porsche.js
exports.up = function (knex) {
    return knex.schema
        .createTable("porsche_models", function (table) {
            table.increments("id").primary();
            table.string("model");
            table.integer("year");
        })
        .createTable("porsche_cars", function (table) {
            table.increments("id").primary();
            table.string("name");
            table.integer("model_id").unsigned();
            table
                .foreign("model_id")
                .references("id")
                .inTable("porsche_models")
                .onDelete("SET NULL");
        });
};

exports.down = function (knex) {
    return knex.schema.dropTable("porsche_cars").dropTable("porsche_models");
};
