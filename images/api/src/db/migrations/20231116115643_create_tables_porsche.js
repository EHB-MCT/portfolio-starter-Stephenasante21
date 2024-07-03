// db/migrations/20231116115643_create_tables_porsche.js
exports.up = function (knex) {
    return knex.schema
        .createTable("users", function (table) {
            table.increments("id").primary();
            table.string("username").notNullable().unique();
            table.string("email").notNullable().unique();
            table.string("password").notNullable();
            table.timestamps(true, true);
        })
        .createTable("car_models", function (table) {
            table.increments("id").primary();
            table.string("model").notNullable();
            table.integer("year").notNullable();
            table.timestamps(true, true);
        })
        .createTable("cars", function (table) {
            table.increments("id").primary();
            table.string("name").notNullable();
            table.integer("model_id").unsigned().notNullable();
            table.integer("user_id").unsigned().notNullable();
            table.foreign("model_id").references("id").inTable("car_models").onDelete("CASCADE");
            table.foreign("user_id").references("id").inTable("users").onDelete("CASCADE");
            table.timestamps(true, true);
        })
        .createTable("maintenance_logs", function (table) {
            table.increments("id").primary();
            table.integer("car_id").unsigned().notNullable();
            table.string("description").notNullable();
            table.date("date").notNullable();
            table.decimal("cost", 10, 2).notNullable();
            table.foreign("car_id").references("id").inTable("cars").onDelete("CASCADE");
            table.timestamps(true, true);
        })
        .createTable("reminders", function (table) {
            table.increments("id").primary();
            table.integer("car_id").unsigned().notNullable();
            table.string("description").notNullable();
            table.date("reminder_date").notNullable();
            table.boolean("completed").defaultTo(false);
            table.foreign("car_id").references("id").inTable("cars").onDelete("CASCADE");
            table.timestamps(true, true);
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("reminders")
        .dropTable("maintenance_logs")
        .dropTable("cars")
        .dropTable("car_models")
        .dropTable("users");
};
