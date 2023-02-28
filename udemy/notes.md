# notes

express - express is a minimal node.js framework ,a higher level of abstraction - express contains a very robust set of features: complex routing,easier handling of requests and responses,middleware , server0side rendering ,etc - express allows for rapid development of node.js application: we don't have to re-invent the wheel - express makes it easier to organize our application into the MVC architecture

```js
const express = require("express");
const app = express();

const port = 4000;

app.listen(port, () => {
  console.log("starting port on 4000");
});
```

api - Application Programming Interface: a piece of software that can be used by another piece of software, in order to allow application to talk to each other

(Wev API)

- DataBase
  - Json Data
    - API
      - client (Node.js fs or http API(node APIs)),Browser's DOM JavaScript API, with object-oriented programming , when exposing methods to the public

```js
app.get("/user/:userId", (req, res) => {

});
```
