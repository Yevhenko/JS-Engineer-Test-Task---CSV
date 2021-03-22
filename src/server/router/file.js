const express = require('express');

const { createFile, getFile } = require('../handler');
const { validator } = require('../../utils/validate');

const file = express.Router();

file.post('/file', async (req, res) => {
  try {
    const response = await createFile();

    res.send(response);
  } catch (error) {
    throw new Error(error);
  }
});

file.get('/file', async (req, res) => {
  try {
    const response = await getFile();

    response.forEach((element) => {
      const { error } = validator.validate(element);

      if (error) console.error('error');
      res.write(response);

      res.send();
    });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = file;
