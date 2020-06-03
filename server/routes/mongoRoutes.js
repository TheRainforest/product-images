const express = require('express');
const db = require('../database/mongoDB');

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded());

router.post('/', (req, res) => {
  db.createItem(req.body.images)
    .then((rows) => res.status(200).json(rows))
    .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  db.getItem(req.params.id)
    .then((rows) => res.status(200).json(rows))
    .catch((err) => res.status(500).json(err));
});

router.put('/:id', (req, res) => {
  db.updateItem(req.params.id, req.params.imageIndex, req.params.image)
    .then((rows) => res.status(200).json(rows))
    .catch((err) => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
  db.deleteItem(req.params.id)
    .then((rows) => res.status(200).json(rows))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
