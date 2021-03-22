/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
exports.up = (knex) =>
  knex.schema.createTable('lawyers', (t) => {
    t.increments('id').primary();
    t.string('full_name', 255).notNullable();
    t.string('phone');
    t.string('email');
    t.integer('age');
    t.integer('experience');
    t.decimal('yearly_income');
    t.boolean('has_children');
    t.string('license_states');
    t.date('expiration_date');
    t.string('license_number');
    t.integer('duplicate_with');
    t.unique(['email', 'phone']);
    t.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    t.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
  });

exports.down = (knex) => knex.schema.dropTable('banks');
