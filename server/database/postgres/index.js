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
  const imagesString = JSON.stringify(images);
  return pool.query('SELECT COUNT(*) FROM items')
    .then((data) => {
      const newIndex = Number(data.rows[0].count) + 1;
      pool.query(`INSERT INTO items (itemId, images) VALUES (${newIndex}, ${imagesString})`);
      return newIndex;
    })
    .then((newIndex) => {
      return pool.query(`SELECT * FROM items WHERE itemId=${newIndex}`);
    });
};

module.exports = { getItem, createItem };
