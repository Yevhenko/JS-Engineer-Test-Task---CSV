require('dotenv').config({ path: `${process.env.PWD}/.env` });

const {
  db: {
    config: { knex },
  },
} = require('./src/db/config');

module.exports = {
  development: knex,
};
