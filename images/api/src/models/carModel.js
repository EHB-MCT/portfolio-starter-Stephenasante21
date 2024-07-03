const knex = require('../db/knex');

exports.getAll = () => {
    return knex('porsche_cars').select('*');
};

exports.getById = (id) => {
    return knex('porsche_cars').where({ id }).first();
};

exports.add = (car) => {
    return knex('porsche_cars').insert(car).returning('*');
};