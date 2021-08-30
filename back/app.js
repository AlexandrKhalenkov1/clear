const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>Main page!!!</h2>')
});

app.listen(5000, console.log('APP WORKING ON 5000'));
