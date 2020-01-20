const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

// TODO:
// save data to file and retrieve to be sent to front end

const app = express();

app.use(cors());
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.get("/ping", (req, res) => {
  res.json("PONG");
  console.log("ponged");
});

app.get("*", (req, res) => {
  res.json("Unknown Request. Here's a Potato.");
});

app.post("/testpost", (req, res) => {
  const data = req.body;
  console.log(data);
  res.json(data);
});

app.post("/save-count", (req, res) => {
  const data = req.body;
  console.log(data);

  const stream = fs.createWriteStream("data.txt", { flags: "a" });
  stream.write(JSON.stringify(data) + "\n", err => {
    if (err) {
      return console.log(err);
    }
    console.log("File is saved!");
  });

  res.json(data);
});

const port = process.env.PORT || 4000;
app.listen(port);

console.log(`Back-end is on port ${port}`);
