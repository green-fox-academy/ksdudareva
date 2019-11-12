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
    { "id": 1, "author": "Blue Swede", "title": "Hooked on a Feeling", "genre": "pop", "year": 1968, "rating": 4.1 },
    { "id": 2, "author": "The Jackson 5", "title": "I Want You Back", "genre": "pop", "year": 1969, "rating": 5 },
    { "id": 3, "author": "The Runaways", "title": "Cherry Bomb", "genre": "rock", "year": 1976, "rating": 4.6 },
    { "id": 4, "author": "Electric Light Orchestra", "title": "Mr. Blue Sky", "genre": "rock", "year": 1977, "rating": 4.9 },
    { "id": 5, "author": "Fleetwood Mac", "title": "The Chain", "genre": "rock", "year": 1977, "rating": 3.9 },
    { "id": 6, "author": "Alla Pugacheva", "title": "Million Roses", "genre": "pop", "year": 1983, "rating": 2.0 },
]

app.get('/awesome', (req, res) => {
    let output = mixList;
    res.send(output);
});

app.post('/awesome/add', (req, res) => {
    let newSong = req.body;
    // let newSong = {
    //     "author": "Blue Swede",
    //     "title": "Hooked on a Feeling",
    //     "genre": "pop",
    //     "year": 1968,
    //     "rating:": 4.1
    // };
    let maxID = Math.max.apply(Math, mixList.map(function (o) { return o.id; }));
    newSong.id = maxID + 1;
    mixList.push(newSong);
    let output = newSong;
    res.send(output);
});

let deleted = [];

app.delete('/awesome/delete/:id', (req, res) => {
    let id = req.params.id;
    let index = mixList.map((x) => x.id).indexOf(parseInt(id));
    let output = mixList.splice(index, 1);
    deleted.push(output);
    res.send(output);
});

app.put('/awesome/rating/:id', (req, res) => {
    let id = req.params.id;
    let index = mixList.map((x) => x.id).indexOf(parseInt(id));
    mixList[index].rating = req.query.rating;
    let output = mixList[index];
    res.send(output);
})

module.exports = app;
