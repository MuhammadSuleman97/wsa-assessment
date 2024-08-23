exports.up = function(knex) {
    return knex.schema.createTable('Participants', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('Users').onDelete('CASCADE');
      table.integer('team_id').unsigned().references('id').inTable('Teams').onDelete('CASCADE');
      table.string('role').notNullable();  // e.g., player, coach
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('Participants');
  };
  