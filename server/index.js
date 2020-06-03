require('newrelic');
require('dotenv').config();

const express = require('express');
const path = require('path');
const router = require('./routes/pgRoutes');

const app = express();

app.use(express.static(path.join(__dirname, '../public/')));
app.use('/api/items', router);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
