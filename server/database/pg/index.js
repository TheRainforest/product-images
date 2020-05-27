const { Pool } = require('pg');
const path = require('path');

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DB,
  port: process.env.PORT,
});

const csvFile = path.join(__dirname, '../product-images.csv');

pool.connect()
  .then(() => pool.query(`COPY items FROM '${csvFile}' WITH DELIMITER '|' CSV HEADER`))
  .then(() => console.log('csv file successfully imported'))
  .catch((err) => console.error(err));
