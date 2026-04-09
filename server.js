const express = require('express');
const app = express();

app.get('/mock', (req, res) => {
  res.set('x-test-header', '\u00e9\u00e9\u00e9');
  res.set('Content-Type', 'application/json; charset=utf-8');
  res.json({ status: 'ok' });
});

app.listen(3000, () => console.log('Running on 3000'));
