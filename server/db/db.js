const { Pool} = require( 'pg');

const pool = new Pool({
  user: 'MO',
  host: '127.0.0.1',
  database: 'GadgetLoopp',
  password: '123',
  port: 5432,
});
module.exports = pool;
