const express = require("express")
const router = express.Router
const errorHandlers = require("../utils")








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

app.post('/breakfast', errorHandlers, (req, res, next) => {
    console.log(req.body)
    res.json({ success: true })
})

module.exports = router
