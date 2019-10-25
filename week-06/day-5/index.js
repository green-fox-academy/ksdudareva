const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static('images'));
app.use(express.static('assets'));
app.use(express.static('script'));

// home page
app.get('/', (req, res) => {
  res.render('home', { imageList });
});

const imageList = [
  { url: "1.jpg", text: "Vincent van Gogh, 1888", moreText: "The Garden at Arles" },
  { url: "2.jpg", text: 'Vincent van Gogh, 1889', moreText: "Irises" },
  { url: "3.jpg", text: 'Vincent van Gogh, 1889', moreText: "Landscape with Olive Trees" },
  { url: "4.jpg", text: 'Vincent van Gogh, 1889', moreText: "Wheatfield with Cypresses" },
  { url: "5.jpg", text: 'Vincent van Gogh, 1890', moreText: "Poppy Field" },
  { url: "6.jpg", text: 'Vincent van Gogh, 1890', moreText: "Almond Blossoms" }
];

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

