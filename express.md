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
