const express = require('express');
const mysql = require('mysql');
const path = require('path');
const databaseName = "reddit";
const tableName = "posts";
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

const app = express();
const PORT = 8080;

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: databaseName
});

conn.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Connected!');
});

app.use(express.json());

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

let output = {};
app.get('/posts', (req, res) => {
    conn.query('SELECT * FROM posts;', function (err, rows) {
        if (err) {
            res.status(500).send('Database error');
            return;
        }
    })
    output = { "posts": rows };
    res.status(200).send(output);
});

app.post('/posts', jsonParser, (req, res) => {
    conn.query('INSERT INTO posts (title, url) VALUES ("' + req.body.title + '", "' + req.body.url + '");', function (err, rows) {
        if (err) {
            res.status(500).send('Database error');
            return;
        }
    })
    output = "Posted!";
    res.status(200).send(output);
});

app.put('/posts/:id/upvote', (req, res) => {
    let output;
    conn.query('UPDATE posts SET score = score + 1 WHERE id = ?;',[req.params.id], function (err, rows) {
        if (err) {
            res.status(500).send('Database error');
            return;
        }
    })
    output = "Upvoted!";
    res.status(200).send(output);
})

// select * from table where id = ? & name = ?, [4, 'aboud'], (err, rows) // SQL injection

app.put('/posts/:id/downvote', (req, res) => {
    let output;
    conn.query('UPDATE posts SET score = score - 1 WHERE id = ?;', [req.params.id], function (err, rows) {
        if (err) {
            res.status(500).send('Database error');
            return;
        }
    })
    output = "Downvoted :(";
    res.status(200).send(output);
})

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});