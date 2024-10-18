const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World Welcome!');
});

app.listen(port, async () => {
  console.log(`Example app running at http://localhost:${port}`);
});