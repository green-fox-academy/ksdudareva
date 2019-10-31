const express = require('express');
const mysql = require('mysql');
const path = require('path');
const databaseName = "reddit";
const tableName = "posts";

const app = express();
const PORT = 8080;

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : databaseName
});

connection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Connected!');
  });

app.use(express.json());



// create a simple get endpoint for /hello
// it should return the string hello world
// start your server and check if it works

app.get('/hello', (req, res) => {
    res.send('Hello World!');
  });




  

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});