require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DB,
  port: process.env.PG_PORT,
});

pool.connect();

const getItem = (id) => {
  return pool.query(`SELECT * FROM items WHERE itemId = ${id}`);
};

const createItem = (images) => {
  const count = pool.query('SELECT COUNT(*) FROM items');
  return pool.query(`INSERT INTO items VALUES (${count}, '{${images.join(',')}}')`);
};

module.exports = { getItem, createItem };
