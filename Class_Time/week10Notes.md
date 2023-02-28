# Week 10

get() - to handle GET requests
post() - to handle POST requests
put() - to handle PUT requests
delete() - to handle DELETE requests
patch() - to handle PATCH requests

```js
app.get("/", (req, res) => {
  // Send a response back to the client
});

app.post("/users", (req, res) => {
  // Do something...
  // Send a response back to the client
});
```

- app.use() - method that declares Express middleware
- /static - path needed in the browser after the server & port, and before the subfolder/filename of the asset
- path.join() - method that joins the specific path segments into one absolute path (path is a built-in Node.js module that you will need to import)
- \_\_dirname - is an global variable that tells the absolute path of the folder containing the specified file
- public is the folder in the project that holds the static assets
