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
    res.send("test")
})

// get handler and fetch for both days' values
server.get("/compare", (req, res) => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice/XBT.json")
    .then(response => response.json())
    .then(data => {
      console.log('first\n', data);
        currentVal = data.bpi.USD.rate;

      fetch("https://api.coindesk.com/v1/bpi/historical/close.json?for=yesterday")
        .then(response => response.json())
        .then(data => {
          console.log('second\n', data);
          let value = Object.values(data.bpi);
          previousVal = typeof value;
          res.send(`Yestday's value was: $${previousVal} USD per Bitcoin; Today's value is: $${currentVal}`);
        });
    });
})


//exporting the required values
module.exports = { server, port };