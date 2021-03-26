const fs = require('fs');
const { pipeline } = require('stream');
const zlib = require('zlib');
const { promisify } = require('util');
const { myTransform } = require('./magic');

const promisifiedPipeline = promisify(pipeline);
const read = fs.createReadStream('uploads/file.zip');
const write = fs.createWriteStream('uploads/file.json');
const gunzip = zlib.createGunzip();

async function transform() {
  try {
    const importantConstant = myTransform();
    await promisifiedPipeline(read, gunzip, importantConstant, write);
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

transform();
