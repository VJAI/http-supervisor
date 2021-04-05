const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

const todos = [

];

app.get('/todos', (req, res) => {
  setTimeout(() => {
    res.send(todos);
  }, 3000);
});

app.get('/todos/:id', (req, res) => {
  res.send({});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
