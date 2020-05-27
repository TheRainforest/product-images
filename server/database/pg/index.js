const { Pool } = require('pg');
const path = require('path');

const pool = new Pool({
  user: 'ericsong',
  host: 'localhost',
  database: 'productimages',
  port: '5432',
});

const csvFile = path.join(__dirname, '../product-images.csv');

pool.connect()
  .then(() => pool.query(`COPY items FROM '${csvFile}' WITH DELIMITER '|' CSV HEADER`))
  .then(() => console.log('csv file successfully imported'))
  .catch((err) => console.error(err));
