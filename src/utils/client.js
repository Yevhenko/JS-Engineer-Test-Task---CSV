const axios = require('axios');
const file = require('./csvToJson');

const options = {
  method: 'GET',
  url: 'https://localhost:3000/file',
  headers: {
    'Content-type': 'string',
  },
  data: file.toString(),
};

async function sendFile() {
  try {
    const request = await axios(options);

    return request;
  } catch (error) {
    throw new Error(error);
  }
}

console.log(sendFile());

module.exports = { sendFile };
