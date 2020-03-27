const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

const port = 3000;

app.set('views', __dirname + '/../public/views');
app.set('view engine', 'pug');

app.use(cors());
app.use(express.static(path.join(__dirname, '/../public')));

app.get('/listing/:productId', function (req, res) {
  res.render('index', {productId: req.params.productId});
});

app.listen(port, () => {
  console.log(`proxy server listening on port ${port}!`);
});