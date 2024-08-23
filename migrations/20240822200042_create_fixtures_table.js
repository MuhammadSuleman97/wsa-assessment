exports.up = function(knex) {
    return knex.schema.createTable('Fixtures', function(table) {
      table.increments('id').primary();
      table.date('date').notNullable();
      table.time('start_time').notNullable();
      table.time('end_time').notNullable();
      table.integer('draw_id').unsigned().references('id').inTable('Draws').onDelete('CASCADE');
      table.integer('venue_court_id').unsigned().references('id').inTable('Venue_courts').onDelete('CASCADE');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('Fixtures');
  };
  