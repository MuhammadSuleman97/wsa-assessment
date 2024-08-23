exports.up = function(knex) {
    return knex.schema.createTable('Venue_courts', function(table) {
      table.increments('id').primary();
      table.integer('venue_id').unsigned().references('id').inTable('Venues').onDelete('CASCADE');
      table.string('court_name').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('Venue_courts');
  };
  