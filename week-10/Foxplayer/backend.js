const express = require('express');
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');
const env = require('dotenv').config();

const app = express();
const PORT = 3000;

app.use('/assets', express.static('assets'));

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


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'foxplayer.html'));
});


// GET /playlists
app.get('/playlists', (req, res) => {
    conn.query('SELECT * FROM playlists;', function (err, playlists) {
        res.status(200).send(playlists);
    });
});

// GET /playlist-tracks



// GET /playlist-tracks/:playlist_id



// add playlist

app.post('/playlists', (req, res) => {
    let newPlaylist = req.body.title;
    conn.query('CREATE TABLE ? (`id` INT unsigned NOT NULL AUTO_INCREMENT, `title` VARCHAR(255) NOT NULL, `artist` VARCHAR(255) NOT NULL,`duration` FLOAT unsigned NOT NULL, `path` VARCHAR(255) NOT NULL, PRIMARY KEY (`id`));', [newPlaylist], function(err, rows) {
        conn.query('INSERT INTO playlists VALUES (null, ?, default)', [newPlaylist], function(err, newRow) {
            conn.query('SELECT * FROM playlists', function(err, playlists){
                res.send(playlists);
            });
        });
    });
})

// delete playlist

app.delete('/playlists/:id', (req, res) => {
    conn.query('DELETE FROM playlists WHERE id = ?', [req.params.id], function (err, rows){

    })
})

//listen to port

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});


