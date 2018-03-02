require('dotenv').config();
const express = require('express');

// Initialize app with express
const app = express();

const _PORT = process.env.PORT;


app.get('/', (req, res, next) => {
  res.send('Fast Forward Task');
});

app.get('/count', (req, res, next) => {
  res.send("Array: " + req.query.array);
  countOcc(req.query.array);
});

/* Function to count num of occurences in Arr */

function countOcc(arr) {
  arr = arr.split(',').map(Number);
  var occurrences = arr.reduce(function(obj, item) {
    obj[item] = (obj[item] || 0) + 1;
    return obj;
    }, {});
  console.log(occurrences);
  return occurrences;
}


// Start the server
app.listen(_PORT, () => {
  console.log('Server Started');
});
