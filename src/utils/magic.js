const { Transform } = require('stream');

const results = [];
function myTransform() {
  return new Transform({
    transform(chunk, encoding, callback) {
      results.push(chunk);
      const data = results.toString();
      callback(null, JSON.stringify(data));
    },
  });
}

module.exports = { myTransform };
