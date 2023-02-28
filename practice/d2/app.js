const express = require('express')
const { get } = require('http')
const errorHandlers = require("./utils")
const breakfastRouter = require("./routes/breakfast")
const app = express()
const port = 5000

app.use(express.json())

let data = [
    {
        calories: 42,
        flavor: "chicken",
        cooked: true,
        prepTime: 10,
        category: "poultry",
        name: "eggs"
    }
]


app.use('/breakfast', (req, res, next) => {
    console.log("path ", req.path)
    console.log("method ", req.method)
    next("banana")
})
app.use((err, req, res, next) => {
    console.log(err)
    next()
})
app.use("/another-resource", (req, res, next) => {
    console.log(req)
})

app.get('/breakfast', (req, res, next) => {
    res.json(data)
    // res.send("fetch all the resources")
})

app.post('/breakfast', errorHandlers, (req, res, next) => {
    console.log(req.body)
    res.json({ success: true })
})

app.get("/another-resource", (req, res, next) => {
    console.log("nothing here")
})
// error for when we don't have a endpoint for
app.use((req, res, next) => {
    const err = new Error("The resource you were looking for could not be found")
    err.statusCode = 404;
    res.json({
        status: err.statusCode,
        message: err.message
    })
})
// error for when we have a endpoint
app.use((err, req, res, next) => {
    const statusCode = err.statusCode
    res.status(statusCode)
    const message = "Something went wrong"
    res.json({
        status: err.statusCode || statusCode,
        message: err.message || message
    })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))
