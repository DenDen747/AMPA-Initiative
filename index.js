const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname)));

app.use('/favicon.ico', express.static('public/icon.ico'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/our-team', (req, res) => {
  res.sendFile(path.join(__dirname, 'our-team.html'));
})

app.listen(process.env.PORT || 85, () => {
  console.log('Webserver started.');
});
