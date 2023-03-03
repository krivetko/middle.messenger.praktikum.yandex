const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', express.static([__dirname, 'dist'].join('/')));

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
