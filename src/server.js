const { server } = require("./app.js");
const { port } = require("./app.js");

server.listen(port);
console.log(`The server is listening on port ${port}`);