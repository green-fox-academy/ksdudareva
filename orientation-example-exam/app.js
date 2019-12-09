"use strict";

const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const path = require("path");
const env = require("dotenv").config();
const jsonParser = bodyParser.json();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/assets", express.static("assets"));

let conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

conn.connect(err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connected!");
});

// GET /

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname, "index.html"));
});

// POST /api/links

app.post("/api/links", (req, res) => {
  let url = req.body.url;
  let secretCode = Math.floor(Math.random() * 9999); //zerofill
  let alias = req.body.alias;

  conn.query(
    "INSERT INTO links (url, alias, secretCode) VALUES (?, ?, ?);",
    [url, alias, secretCode],
    function(err, rows) {
      if (err) {
        res.status(500).send("Something is wrong");
        return;
      }
      conn.query("SELECT * FROM links WHERE id = ?;", [rows.insertId], function(
        err,
        newRow
      ) {
        if (err) {
          res.status(500).send("Something is wrong");
          return;
        }
        res.send(newRow);
      });
    }
  );
});

// GET /a/{alias}

app.get("/a/:alias", (req, res) => {
  let checkAlias = req.params.alias;

  conn.query(
    "UPDATE links SET hitCount = hitCount + 1 WHERE alias = ?;"[checkAlias],
    function(err, newRow) {
      conn.query("SELECT * FROM links WHERE alias = ?;", [checkAlias], function(
        err,
        newRow
      ) {
        if (err) {
          res.status(404).send("Something is wrong");
          return;
        }
      });
      console.log(newRow);
      res.redirect(newRow[0].url);
    }
  );
});

// GET /api/links

let output = {};
app.get("/api/links", (req, res) => {
  conn.query("SELECT id, url, alias, hitCount FROM links;", function(
    err,
    rows
  ) {
    if (err) {
      res.status(500).send("Database error");
      return;
    }

    output = { posts: rows };
    res.status(200).send(output);
  });
});

// DELETE /api/links/{id}

app.delete("/api/links/:id", (req, res) => {
  let linksId = req.params.id;
  let theCode = req.body.secretCode;
  conn.query("SELECT * FROM links WHERE id = ?;"[linksId], function(err, row) {
    if (err) {
      res.status(500).send("Database error");
      return;
    }
    if (theCode == row[0].secretCode) {
      conn.query("DELETE FROM links WHERE id = ?;", [linksId], function(
        err,
        row
      ) {});
      res.status(204).res.send("Post with id " + linksId + " was deleted.");
    }
    if (linksID == row[0].id && theCode != row[0].secretCode) {
      res.status(403).res.send("The code does not match the entry.");
    } else {
      res.status(404).res.send("Something went wrong");
    }
  });
});

//listen to port

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
