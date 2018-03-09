//imported modules
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

//server setup
const server = express();
const port = 3000;

//middleware setup
server.use(bodyParser.json());

//initial get handler for requests to the "/" URL
server.get("/", (req, res) => {
    res.send("<h1>Litcoin!</h1>");
})

//get handler with fetch to get bitcoin values
server.get("/compare", (req, res) => {
    let currentVal, previousVal;
    fetch("https://api.coindesk.com/v1/bpi/currentprice/XBT.json")
    .then(response => response.json())
    .then(data => res.json(data));
})









//exporting the required values
module.exports = { server, port };