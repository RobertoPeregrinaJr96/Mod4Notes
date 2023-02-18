Routers are mini versions of Express applications — they provide functionality for handling route matching, requests, and sending responses, but they do not start a separate server or listen on their own ports.To use a router, we mount it at a certain path using app.use() and pass in the router as the second argument.

```js
const express = require("express");
const app = express();

const monsters = {
  1: {
    name: "godzilla",
    age: 250000000,
  },
  2: {
    name: "manticore",
    age: 21,
  },
};

const monstersRouter = express.Router();

app.use("/monsters", monstersRouter);

monstersRouter.get("/:id", (req, res, next) => {
  const monster = monsters[req.params.id];
  if (monster) {
    res.send(monster);
  } else {
    res.status(404).send();
  }
});
```

Inside the monstersRouter, all matching routes are assumed to have /monsters prepended, as it is mounted at that path. monstersRouter.get('/:id') matches the full path /monsters/:id.

When a GET /monsters/1 request arrives, Express matches /monsters in app.use() because the beginning of the path ('/monsters') matches. Express’ route-matching algorithm enters the monstersRouter‘s routes to search for full path matches. Since monstersRouter.get('/:id) is mounted at /monsters, the two paths together match the entire request path (/monsters/1), so the route matches and the callback is invoked. The 'godzilla' monster is fetched from the monsters object and sent back.

Generally, we will keep each router in its own file, and require them in the main application.To do this with monstersRouter, we would create a new file monsters.js and move all code related to /monsters requests into it.

```js
// monsters.js
const express = require("express");
const monstersRouter = express.Router();

const monsters = {
  1: {
    name: "godzilla",
    age: 250000000,
  },
  2: {
    Name: "manticore",
    age: 21,
  },
};

monstersRouter.get("/:id", (req, res, next) => {
  const monster = monsters[req.params.id];
  if (monster) {
    res.send(monster);
  } else {
    res.status(404).send();
  }
});

module.exports = monstersRouter;
```

This code contains all the monsters specific code. In a more full-fledged API, this file would contain multiple routes.

![Alt text](https://content.codecademy.com/courses/learn-express-routes/express_yourself_diagram_4.svg)

you can see an Express application using two routers. A GET request arrives for /expressions/1. Because the beginning of the path does not match /animals in the first app.use(), the Express server moves on to the next app.use(), which matches /expressions.

Express’s route matching algorithm then enters the expressionsRouter instance which is required from expressions.js. Inside this router, the path matching changes. Even though the whole request path is /expressions/1, inside the expressionsRouter, all paths are matched from the parts of the path after /expressions, meaning that in this context, the router is trying to match the path /1.

Because the path is /1, the path does not match the first .get() method at /. The Express server moves on to the next route, which has a route parameter of /:id, so it matches! This route handles the necessary logic and sends the response.

Routers can be nested as many times as necessary for an application, so understanding nested route matching is important for creating complicated APIs.
