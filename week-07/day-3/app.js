const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

app.use(express.static('assets'));

app.use(bodyParser.urlencoded({ extended: false }));
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
    if (req.query.input) {
        var list = {
            "received": req.query.input,
            "result": req.query.input * 2
        }
    } else {
        var list = ("Please provide an input!");
    }
    res.send(list);
})

app.get('/greeter', (req, res) => {
    let name = req.query.name;
    let title = req.query.title;
    let output = {};
    if (name && title) {
        output["welcome_message"] = "Oh, hi there " + name + ", my dear " + title + "!";
    } else if (name) {
        output["error"] = "Please provide a title!"
    }
    else if (title) {
        output["error"] = "Please provide a name!";
    }
    else {
        output["error"] = "Please provide a name and a title!";
    }

    res.send(output);
})

app.get('/appenda/:appendable', (req, res) => {
    let output = { 'appended': (req.params.appendable + "a") };
    res.send(output);
})

app.post('/dountil/:action', jsonParser, (req, res) => {
    let output = {};
    let response = req.body;
    let num = response.until;
    let result;
    if (req.params.action == 'sum') {
        result = 0;
        for (let i = 0; i <= num; i++) {
            result += i;
        }
        output['result'] = result;
    } else if (req.params.action == 'factor') {
        result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        output['result'] = result;
    }
    else {
        output["error"] = "Please provide a number!";
    }
    res.send(output);
})



app.post('/arrays', jsonParser, (req, res) => {
    let output = {};
    let response = req.body;
    let numbers = response.numbers;
    let what = response.what;
    let result;
    if (numbers != undefined) {
        if (what == 'sum') {
            result = 0;
            for (let i = 0; i < numbers.length; i++) {
                result += numbers[i];
            }
            output["result"] = result;
        } else if (what == 'multiply') {
            result = 1;
            for (let i = 0; i < numbers.length; i++) {
                result *= numbers[i];
            }
            output["result"] = result;
        } else if (what == 'double') {
            result = [];
            for (let i = 0; i < numbers.length; i++) {
                result.push(numbers[i] * 2);
            }
            output["result"] = result;
        }
        else {
            output['error'] = "Please provide what to do with the numbers!";
        }
    }
    console.log(output);
    res.status(200);
    res.send(output);
});

// app.post('/arrays', jsonParser, (req, res) => {
//     let output = {};
//     let response = req.body;
//     let text = response.text;
//     let result;

//     if (req.body.text == undefined) {
//         output["error"] = "Feed me some text you have to, padawan young you are. Hmmm.";
//     } else {
//         let lines = text.split('.');
//         let words = lines.map(e => e.split(" "));
//         let swapped = [];
//         for (let i = 0; i < words.length; i++) {
//             swapped.push()
//         }
//     }
// });

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});