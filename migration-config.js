require('dotenv').config();

module.exports = {
  databaseUrl: process.env.DATABASE_URL || `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
  migrationTable: 'pgmigrations',
  dir: 'migrations',
  // You can add more options like schemas, migrationsTableSchema, etc.
};
