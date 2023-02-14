Express is a Node module, so in order to use it, we will need to import it into our program file.

```js
// Import the express library here
const express = require("express");
```

we have to tell the server where to listen for new requests by providing a port number argument to a method called app.listen()

```js
// Instantiate the app here
const app = express();

const PORT = process.env.PORT || 4001;
```
The second argument is a callback function that will be called once the server is running and ready to receive responses.
```js
// Invoke the app's `.listen()` method below:
app.listen(PORT, () => {
  console.log("is this working");
});
```

Express servers send responses using the .send() method on the response object. .send() will take any input and include it in the response body.
```js
const monsters = [
  { type: 'werewolf' },
  { type: 'hydra' },
  { type: 'chupacabra' }
];
app.get('/monsters', (req, res, next) => {
  res.send(monsters);
});
```
Express parses any parameters, extracts their actual values, and attaches them as an object to the request object: req.params. This object’s keys are any parameter names in the route, and each key’s value is the actual value of that field per request.They act as wildcards, matching any text at that path segment. For example /monsters/:id will match both/monsters/1 and /monsters/45.
```js
const monsters = {
  hydra: { height: 3, age: 4 },
  dragon: { height: 200, age: 350 }
};
// GET /monsters/hydra
app.get('/monsters/:name', (req, res, next) => {
  console.log(req.params); // { name: 'hydra' }
  res.send(monsters[req.params.name]);
});
```
