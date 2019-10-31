const express = require('express');
const mysql = require('mysql');
const path = require('path');
const databaseName = "reddit";
const tableName = "posts";

const app = express();
const PORT = 8080;

var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : databaseName
});

conn.connect((err) => {
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

let output = {};

app.get('/posts', (req, res) => {
    conn.query('SELECT * FROM posts;', function(err, rows) {
        if (err) {
          res.status(500).send('Database error');
          return;
        }
        output = {"posts": rows};
    res.status(200);
    res.send(output);
})
});
  

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});