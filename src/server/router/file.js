const express = require('express');

const { getFile } = require('../handler');

const file = express.Router();

file.get('/file', async (req, res) => {
  try {
    const response = await getFile();

    res.send(response);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = file;
