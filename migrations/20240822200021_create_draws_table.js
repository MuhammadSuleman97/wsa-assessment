exports.up = function(knex) {
    return knex.schema.createTable('Draws', function(table) {
      table.increments('id').primary();
      table.integer('team1_id').unsigned().references('id').inTable('Teams').onDelete('CASCADE');
      table.integer('team2_id').unsigned().references('id').inTable('Teams').onDelete('CASCADE');
      table.integer('competition_id').unsigned().references('id').inTable('Competitions').onDelete('CASCADE');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('Draws');
  };
  