const express = require('express');
const { Pool } = require('pg');
const db = require('../database/postgres');

require('dotenv').config();

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
    .catch((err) => res.status(400).send({ error: err.message }));
});

router.post('/', (req, res) => {
  db.createItem(req.body.images)
    .then((data) => {
      if (!data.rows[0]) {
        throw new Error('error');
      }
      res.status(200).json(data.rows[0]);
    })
    .catch((err) => res.status(400).send({ error: err.message }));
});

module.exports = router;
