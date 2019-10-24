const express = require('express');
const port = 3000;
const app = express();

app.use(express.static('./'));

app.listen(port);

app.get('/', function(req, res){
    res.sendfile('index.html')
  });

  console.log(port);
