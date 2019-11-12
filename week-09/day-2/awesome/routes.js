const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

let mixList = [
    { "author": "Blue Swede", "title": "Hooked on a Feeling", "genre": "pop", "year": 1968, "rating:": 4.1 },
    { "author": "The Jackson 5", "title": "I Want You Back", "genre": "pop", "year": 1969, "rating:": 5 },
    { "author": "The Runaways", "title": "Cherry Bomb", "genre": "rock", "year": 1976, "rating:": 4.6 },
    { "author": "Electric Light Orchestra", "title": "Mr. Blue Sky", "genre": "rock", "year": 1977, "rating:": 4.9 },
    { "author": "Fleetwood Mac", "title": "The Chain", "genre": "rock", "year": 1977, "rating:": 3.9 },
    { "author": "Alla Pugacheva", "title": "Million Roses", "genre": "pop", "year": 1983, "rating:": 2.0 },
]

app.get('/awesome', (req, res) => {
    let output = mixList;
    res.send(output);
});

app.post('awesome/add', (req, res) => {
    let newSong = {
        "author": "Blue Swede",
        "title": "Hooked on a Feeling",
        "genre": "pop",
        "year": 1968,
        "rating:": 4.1
    };

})

module.exports = app;