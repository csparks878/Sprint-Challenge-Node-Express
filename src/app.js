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

//initial get handler for requests to the "/" URL
server.get("/", (req, res) => {
    res.send("<h1>Litcoin!</h1>");
})



//get handler and fetch for today's values
// server.get("/compare", (req, res) => {
//     fetch("https://api.coindesk.com/v1/bpi/currentprice/XBT.json")
//     .then(response => response.json())
//     .then(data => {
//         currentVal = data.bpi.USD.rate;
//         res.send(`Today's value is: $${currentVal} USD per Bitcoin`);
//     });
// })

//get handler and fetch for tomorrow's values
server.get("/compare", (req, res) => {
    fetch("https://api.coindesk.com/v1/bpi/historical/close.json?for=yesterday")
    .then(response => response.json())
    .then(data => {
        let value = Object.values(data.bpi);
        previousVal = value;
        res.send(`Yestday's value was: $${previousVal} USD per Bitcoin`);
    })
})








//exporting the required values
module.exports = { server, port };