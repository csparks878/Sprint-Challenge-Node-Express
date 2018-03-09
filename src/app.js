//imported modules
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

//server setup
const server = express();
const port = 3000;

//middleware setup
server.use(bodyParser.json());

//initial get request for the "/" URL
server.get("/", (req, res) => {
    res.send("<h1>Litcoin!</h1>");
})









//exporting the required values
module.exports = { server, port };