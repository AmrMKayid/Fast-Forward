require('dotenv').config();
const express = require('express');

// Initialize app with express
const app = express();

const _PORT = process.env.PORT;


app.get('/', (req, res, next) => {
  res.send('Fast Forward Task');
});

app.get('/count', (req, res, next) => {
  res.send(countOcc(req.query.array));
});

/* Function that counts the occurrences of each number in the array */
function countOcc(arr) {
  arr = arr.split(',').map(Number);
  var occurrences = arr.reduce((obj, item) => {
    obj[item] = (obj[item] || 0) + 1;
    return obj;
  }, {});
  // console.log(occurrences);
  return occurrences;
}

// Start the server
app.listen(_PORT, () => {
  console.log('Server Started');
});
