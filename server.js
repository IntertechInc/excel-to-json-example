const express = require('express');
const app = express();
const convertExcel = require('excel-as-json').processFile;

app.get('/', (req, res) => {
  convertExcel('./data.xlsx', null, false, (err, data) => {
    res.send(data);
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
