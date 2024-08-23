exports.up = function(knex) {
    return knex.schema.createTable('Venues', function(table) {
      table.increments('id').primary();
      table.string('short_name').notNullable();
      table.string('timezone').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('Venues');
  };
  