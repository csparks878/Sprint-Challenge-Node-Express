1. What is Node?
- Node is a framework for server-side processing that uses JavaScript. Because it is written with a C++ architechure, it adds more functionality than vanilla JavaScript has.

2. What is Express?
- Express is a library that can be added to Node.js for additional functionality while writing back-end JavaScript. It provides built in methods--such as .get and .post--that make handling requests much easier than in vanilla Node.js. Also, it allows for the organization of your applications into Model View Controllers.

3. What is Middleware?
- Middleware refers to modules/libraries that can be added to your default system architechture. It intercepts the code at a given point, and adds a particular functionality (both contingent on the type of Middleware you're using).

4. What is an endpoint?
- This one I'm not so clear on, to be honest. The technical definitions I came across earlier this week seem to imply that an endpoint is either:
A. A node/device somewhere in your network that allows data to flow back and forth on said network.
or,
B. A network/node/router outside of, or on the edge of the main network.
I think in the way it's been used this week, definition A would be the more correct, as we've been using the designated web address/Express Handlers to allow data to flow from somewhere either on our own server, or from an API, to the client's device.