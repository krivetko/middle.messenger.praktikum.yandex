const express = require('express');

const app = express();
const PORT = 3000;

app.use('/', express.static([__dirname, 'static'].join('/')));
app.use('/src', express.static([__dirname, 'src'].join('/')));

app.listen(PORT, function () {
  console.log(`Sprint 1`);
}); 