Writing code is a creative process. Programmers will be quick to differ in opinion on whether the solution to a problem should be implemented in one way or another — citing tradeoffs in algorithms, structures, or even languages. Due to these trade-offs, the problems programmers face most frequently will have several different solutions, all correct but all written differently with various factors considered. Because “correct” code can take so many different forms, developers have cultural notions of code quality that is somewhat independent of these decisions.

One concept that is central to the notion of quality code is that all code is read many, many more times than it is written. Maintaining and updating code takes up much more of a software developer’s time than production. There are many ways to make this less of a burden, and these techniques frequently correspond to code quality principles. Naming variables consistently so that they’re identifiable is one way to improve the readability of a codebase. Another pillar of code quality is avoiding duplication of code within a codebase.

Code duplication is an invitation for bugs. If incorrect code is copy-and-pasted in multiple places, a developer might remedy the flaws in only a few of those places and fail to fix the buggy code everywhere. In this course, we will investigate several ways to avoid replication and reduce complexity. In programming in general, this often means putting the reused code into reusable containers like functions and objects. In Express specifically, this will also mean composing our desired functionality into a series of middleware functions.

Beyond labeling, good code will leverage the strength of its programming language to avoid performing the same tasks

Take a look at the following code:

```js
const addFive = number => {
  const fiveAdded = number + 5;
  console.log(`Your number plus 5 is ${fiveAdded}`);
}

const addTen = number => {
  const tenAdded = number + 10;
  console.log(`Your number plus 10 is ${tenAdded}`);
}

const addTwenty = number => {
  const twentyAdded = number + 20;
  console.log(`Your number plus 20 is ${twentyAdded}`);
}
```
While these three function definitions are not exact duplicates of each other, a well-designed application will be flexible enough to join similar functionality in a single element.

```js
const addNumber = (number, addend) => {
  const numAdded = number + addend;
  console.log(`Your number plus ${addend} is ${numAdded}`);
}
```
Code that performs the same task in multiple places is repetitive, and the quality coder’s credo is “Don’t Repeat Yourself” (DRY)

So how do we get code to run every time one of our Express routes is called without repeating ourselves? We write something called middleware. Middleware is code that executes between a server receiving a request and sending a response. It operates on the boundary, so to speak, between those two HTTP actions.

In Express, middleware is a function. Middleware can perform logic on the request and response objects, such as: inspecting a request, performing some logic based on the request, attaching information to the response, attaching a status to the response, sending the response back to the user, or simply passing the request and response to another middleware. Middleware can do any combination of those things or anything else a Javascript function can do.
```js
app.use((req, res, next) => {
  console.log('Request received');
});
```

The previous code snippet is an example of middleware in action. app.use() takes a callback function that it will call for every received request. In this example, every time the server receives a request, it will find the first registered middleware function and call it. In this case, the server will find the callback function specified above, call it, and print out 'Request received'.

You might be wondering what else our application is responsible for that isn’t related to middleware. The answer is not much. To quote the Express documentation:

An Express application is essentially a series of middleware function calls.

It is precisely this service that we leverage Express for. In addition to performing the routing that allows us to communicate appropriate data for each separate endpoint, we can perform application logic we need by implementing the necessary middleware.
