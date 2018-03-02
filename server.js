const express = require('express');

// Initialize app with express
const app = express();

const _PORT = process.env.PORT;


app.get('/', (req, res, next) => {
  res.send('Fast Forward Task');
});


// Start the server
app.listen(_PORT, () => {
  console.log('Server Started');
});
