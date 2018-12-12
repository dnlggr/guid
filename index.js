const express = require('express');
const app     = express();
const uuid    = require('uuid/v1');

app.get('/guid', function (req, res) {
  res.json({ 'guid': uuid() });
});

app.listen(8080, function () {
  console.log('GUID Server listening on port 8080.');
});
