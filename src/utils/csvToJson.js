const fs = require('fs');
const csv = require('csv-parser');

const results = [];

const file = fs
  .createReadStream('CSV.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => console.log(results));

module.exports = file;
