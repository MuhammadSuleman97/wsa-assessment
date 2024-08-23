exports.up = function(knex) {
    return knex.schema.createTable('Teams', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.integer('competition_id').unsigned().references('id').inTable('Competitions').onDelete('CASCADE');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('Teams');
  };
  