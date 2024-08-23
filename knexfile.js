module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'muhammadsuleman',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_DATABASE || 'postgres',
      port: process.env.DB_PORT || 5432,
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};
