const express = require('express');
const db = require('./database/index');

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded());

router.post('/', (req, res) => {
  db.createItem(req.body.images)
    .then((rows) => res.status(200).json(rows))
    .catch((err) => res.status(400).json({ message: `Error: ${err}` }));
});

router.get('/:id', (req, res) => {
  db.getItem(req.params.id)
    .then((rows) => res.status(200).json(rows))
    .catch((err) => res.status(400).json({ message: `Error: ${err}` }));
});

router.put('/:id', (req, res) => {
  db.updateItem(req.params.id, req.params.imageIndex, req.params.image)
    .then((rows) => res.status(200).json(rows))
    .catch((err) => res.status(400).json({ message: `Error: ${err}` }));
});

router.delete('/:id', (req, res) => {
  db.deleteItem(req.params.id)
    .then((rows) => res.status(200).json(rows))
    .catch((err) => res.status(400).json({ message: `Error: ${err}` }));
});

module.exports = router;
