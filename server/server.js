const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

const port = 3000;

// app.get('/', (req, res) => {
//   res.sendStatus(200);
// });
app.use(cors());
app.use(express.static(path.join(__dirname, '/../public')));

app.listen(port, () => {
  console.log(`proxy server listening on port ${port}!`);
});