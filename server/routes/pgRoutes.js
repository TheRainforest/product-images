const express = require('express');
const { Pool } = require('pg');
const db = require('../database/postgres');

require('dotenv').config();

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  port: process.env.PG_PORT,
});

pool.connect();

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded());


router.get('/:id', (req, res, next) => {
  db.getItem(req.params.id)
    .then((data) => {
      if (!data.rows[0]) {
        throw new Error('error');
      }
      res.status(200).json(data.rows[0]);
    })
    .catch((err) => res.status(400).send('Error retrieving data'));
});

router.post('/', (req, res) => {
  db.createItem(req.body.images)
    .then((data) => {
      if (!data.rows[0]) {
        throw new Error('error');
      }
      res.status(200).json(data.rows[0]);
    })
    .catch((err) => res.status(500).send('Error posting data'));
});

module.exports = router;
