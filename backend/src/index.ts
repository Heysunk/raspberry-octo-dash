import express = require('express');

const app: express.Application = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});


app.listen(8000, () => {
  console.log('octo-dash listening on port 8000!');
})