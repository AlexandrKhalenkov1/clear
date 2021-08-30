const express = require('express');
const bodyParser = require('body-parser');
const testRouter = require('./test.router');
const cors = require('cors');

const app = express();

app.use(express.json({ extended: true }));
app.use(cors());
app.listen(5000, console.log('APP WORKING ON 5000'));


app.use("/api", testRouter);



app.use("/about", function (request, response) {
  response.send("О сайте");
})


app.get('/', (req, res) => {
  res.send('<h2>Main page!!!</h2>')
});
