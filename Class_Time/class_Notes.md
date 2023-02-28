<!-- Monday week 10 2/27 -->

<!-- topic of day:Express -->

# front end?

view that's rendered
user interface,client
limited amount of storage
user experience
html,css,dom manipulation
working off wire frames

Designing how a request is sent
Handling a response

`back end?????`
database
servers
frameworks
send response to clients
SQL
Sequelize/ORMs
RDBMs/MongoDB
Express

handle requests
Design responses

backend is like the framework of an application

node initialization => npm init -y || npm i -y

npm install nodemon => allows the server to auto update when changes are made

npm install nodemon -D => install in a different dependency list for developers and will not be installed in production

```js
const express = require("express"); // allows us to use the express library by importing into the JS file

const app = express(); // we now create a application variable to use express

app.listen(8000, () => {
  // .listen will wait for the application response
  console.log("Server is running on port 8000");
});
```

npm run dev `script name` => will run the script for development

```js
app.get("/test", (req, res, nex) => {
  // we use a path as the first parameter then a callback function
  res.send("Server is alive");
});
// app.post(),app.put(),app.path(),app.delete()
// we also have the app.all to apply to everything
// app.use to invoke so a particular function
```

- Patch => updating the entire entry
- put => updating a part of an entry

- what is a path => string,array of strings

- middleware>> => optional response

define a response =>{

- send() => if passed a string , will send a string response
- json() => always responds with json
- status(), => defines a status code
- redirect(), => move the client to a different path
- render()
  }

How do we take user input

- res.body
  - requires app.use(express.json())
  - often used for taking in form data
- res.params
  - defined in end point path
  - adds property of that name to req.param
- req.query
  - optional additions to a request
  - typically used for conditionally augmenting search querying

Route order matters !

- express runs top to bottom
  - a request checks every endpoint to see if its a match
- Most specific at the top,dynamic below

<!-- learning objective -->

Initialize an Express application

<!--
* we initialize node
* install express
* use the require keyword to use the express keyword from the library
* initialize the app variable set to the express keyword invoked
 -->

Use Express to send simple text and JSON in response to a request from a client

```js
app.get("/URL", (req, res, next) => {
  res.json("simple text");
});
```

Create a route handler using express

<!--

 -->

Predict the order that Express will match requests with route handlers

<!--
 -->

Justify the selection of Express as a back-end framework

<!--
 -->

Debug an Express server using Postman

<!--
 -->

List as many methods as you can remember for defining an end point

<!--
  -->

How do we define a route param in an express end point?

<!--
 -->
