const errCollection = (req, res, next) => {
    req.errors = {}
    next()
}

const breakfastCheckName = (req, res, next) => {
    if (req.body.name) {
        return next()
    }
    res.status(401)
    res.send("Please provide a name for this breakfast")
}

const breakfastCheckCooked = (req, res, next) => {
    console.log(req.body.cooked)
    if (req.body.cooked === true || req.body.cooked === false) {
        next()
    }
    req.errors.cooked = "please provide a valid cooked value {true || false"
}
const checkErrors = (req, res, next) => {
    if (req.errors) {
        console.log("errors")
    }
}

const errorHandlers = [errCollection, breakfastCheckName, breakfastCheckCooked, checkErrors]

module.exports = errorHandlers
