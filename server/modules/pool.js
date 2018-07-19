const pg = require('pg');

const Pool = pg.Pool;

const pool = new Pool({
    host:'localhost',
    port:'5432',
    database: 'MovieCollection',
    max: 10,
    idleTimeoutMillis: 30000
});

pool.on('connect', () => {
    console.log('PG connected to Postgresql');
});

pool.on('err', (err) => {
    console.log('PG err', err);
});

module.exports = pool;