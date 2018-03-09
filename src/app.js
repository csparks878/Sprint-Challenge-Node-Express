//imported modules
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

//server setup
const server = express();
const port = 3000;

//middleware setup
server.use(bodyParser.json());

//initializing variables to hold the coin rates
let currentVal, previousVal, changeInVal;


fetch("https://api.coindesk.com/v1/bpi/currentprice/XBT.json")
    .then(response => response.json())
    .then(data => {
        currentVal = data.bpi.USD.rate;
    });

fetch("https://api.coindesk.com/v1/bpi/historical/close.json?for=yesterday")
    .then(response => response.json())
    .then(data => {
        let value = Object.values(data.bpi);
        previousVal = value;
});

(function diff(a, b){
    if (a > b) changeInVal = a - b;
    else changeInVal = b - a;
})(currentVal, previousVal);

//initial get handler for requests to the "/" URL
server.get("/", (req, res) => {
    res.send("test")
})

server.get("/compare", (req, res) => {
    res.send(`${currentVal} ${previousVal} ${changeInVal}`);
})







//exporting the required values
module.exports = { server, port };