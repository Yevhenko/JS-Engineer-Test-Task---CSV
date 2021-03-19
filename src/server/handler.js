const knex = require('../db/index');

async function getFile() {
  try {
    const lawyers = await knex.select().table('lawyers');

    return lawyers;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { getFile };
