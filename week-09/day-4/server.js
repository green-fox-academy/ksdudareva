const express = require('express');
const mysql = require('mysql');
const path = require('path');
const env = require('dotenv').config();
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

let conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

conn.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Connected!');
});

app.use(express.static('assets'));
app.use('/static', express.static('static'));
// app.use(express.static(__dirname + '/static/assets'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
let jsonParser = bodyParser.json();

//hello world
app.get('/hello', function (req, res) {
    output = "Hello World!"
    res.send(output);
  });

//main page

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'reddit-frontend.html'));
});

//select all posts

let output = {};
app.get('/posts', (req, res) => {
    conn.query('SELECT * FROM posts;', function (err, rows) {
        if (err) {
            res.status(500).send('Database error');
            return;
        }

        output = { "posts": rows };
        res.status(200).send(output);
    });
});

//insert post

app.post('/posts', (req, res) => {
    conn.query('INSERT INTO posts (title, url) VALUES (?,?);',
        [req.body.title, req.body.url], function (err, rows) {
        if (err) {
            res.status(500).send('Database error');
            return;
        }
        conn.query('SELECT * FROM posts WHERE id =?;', [rows.insertId], function (err, newRow) {
            if (err) {
                res.status(500).send('Database error');
                return;
            }
            output = newRow;
            res.status(200).send(output);
        });
    })
});

// upvote

app.put('/posts/:id/upvote', (req, res) => {
    conn.query('UPDATE posts SET score = score + 1 WHERE id = ?;', [req.params.id], async function (err, rows) {
        if (err) {
            res.status(500).send('Database error');
            return;
        }
        let post = await getPostById(req.params.id);
        res.status(200).send(post);
    })
});

function getPostById(id) {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM posts WHERE id =?;', [id], function (err, newRow) {
            if (err) {
                reject(err);
            }
            resolve(newRow);
        });
    });
}

// select * from table where id = ? & name = ?, [4, 'aboud'], (err, rows) // SQL injection

//downvote

app.put('/posts/:id/downvote', (req, res) => {
    let output;
    conn.query('UPDATE posts SET score = score - 1 WHERE id = ?;', [req.params.id], function (err, rows) {
        if (err) {
            res.status(500).send('Database error');
            return;
        }
        conn.query('SELECT * FROM posts WHERE id =?;', [req.params.id], function (err, newRow) {
            if (err) {
                res.status(500).send('Database error');
                return;
            }
            output = { "posts": newRow };
            res.status(200).send(output);
        });
    })
})

//simple delete

// app.delete('/posts/:id/', (req, res) => {
//     conn.query('DELETE FROM posts WHERE id = ?;', [req.params.id], function (err, rows) {
//         if (err) {
//             res.status(500).send('Database error');
//             return;
//         }
//     })
//     output = "Deleted!";
//     res.status(200).send(output);
// })

//trying to save to the deleted table

app.delete('/posts/:id/', (req, res) => {
    conn.query('INSERT INTO deleted SELECT * FROM posts WHERE id = ?', [req.params.id], function (err, rows) {
        if (err) {
            res.status(500).send('Database error');
            return;
        }
        conn.query('DELETE FROM posts WHERE id = ?;', [req.params.id], function (err, rows) {
            if (err) {
                res.status(500).send('Database error');
                return;
            }
            conn.query('SELECT * FROM deleted WHERE id =?;', [req.params.id], function (err, newRow) {
                if (err) {
                    res.status(500).send('Database error');
                    return;
                }
                output = { "posts": newRow };
                res.status(200).send(output);
            });
        })
    })
})


//listen to port

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});



