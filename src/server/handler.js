/* eslint-disable no-restricted-syntax */
const fs = require('fs');
const csv = require('csv-parser');
const knex = require('../db/index');

async function getFile() {
  try {
    const lawyers = await knex.select().table('lawyers');

    return lawyers;
  } catch (error) {
    throw new Error(error);
  }
}

async function createFile() {
  try {
    const results = [];
    fs.createReadStream('CSV.csv')
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', async () => {
        for await (const element of results) {
          await knex('lawyers').insert({
            full_name: element['Full Name'],
            phone: element.Phone,
            email: element.Email,
            age: element.Age,
            experience: element.Experience,
            yearly_income: element['Yearly Income'],
            has_children: element['Has children'],
            license_states: element['License states'],
            expiration_date: element['Expiration date'],
            license_number: element['License number'],
            duplicate_with: element[1],
          });
        }
      });

    return 'data has been recorded';
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { createFile, getFile };
