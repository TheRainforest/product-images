require('dotenv').config();
const { Pool } = require('pg');
const path = require('path');

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  port: process.env.PG_PORT,
});

const csvFile = path.join(__dirname, '../product-images.csv');

pool.connect()
  .then(() => pool.query(`COPY items FROM '${csvFile}' WITH DELIMITER '|' CSV HEADER`))
  .then(() => console.log('csv file successfully imported'))
  .catch((err) => console.error(err));
