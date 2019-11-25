const express = require('express');
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');

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



//listen to port

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});