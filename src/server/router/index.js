const express = require('express');

const file = require('./file');

const router = express.Router();

router.use(file);

module.exports = router;
