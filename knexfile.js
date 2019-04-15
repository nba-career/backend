// we need to add this fake code for knex to think we have a local db
const localPg = {
    host: 'localhost',
    database: 'nba',
    user: 'nba',
    password: 'nba'
  }
  
  const prodDbConnection = process.env.DATABASE_URL || localPg;
  
  module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './data/nba.db3',
      },
      useNullAsDefault: true,
      migrations: {
        directory: './data/migrations',
      },
      seeds: {
        directory: './data/seeds',
      },
    },
    testing: {
      client: 'sqlite3',
      connection: {
        filename: './data/test.db3',
      },
      useNullAsDefault: true,
      migrations: {
        directory: './data/migrations',
      },
      seeds: {
        directory: './data/seeds',
      },
    },
    production: {
      client: 'pg',
      connection: prodDbConnection,
      migrations: {
        directory: './data/migrations',
      },
      seeds: {
        directory: './data/seeds',
      },
    },
  };
