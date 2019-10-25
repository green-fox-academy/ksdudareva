const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  // render `home.ejs`
  res.render('home', {
    title: 'Welcome back, ${name}!',
    qs: Object.entries(req.query).length === 0 ? {name: "Guest" } :  req.query.name
  });
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});