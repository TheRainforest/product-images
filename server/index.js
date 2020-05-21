/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */

const express = require('express');
const path = require('path');
const router = require('./router');

const app = express();

app.use(express.static(path.join(__dirname, '../public/')));
app.use('/api/items', router);

const PORT = 3001;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
