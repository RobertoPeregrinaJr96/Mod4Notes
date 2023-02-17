const express = require('express');
const bodyParser = require('body-parser')

const app = express();
// .use allows our app to use other library's
// the .urlencoded allows the use of POST data from forms and the like
// {extended : true} allows us to POST nested objects
app.use(bodyParser.urlencoded({ extended: true }));
// Calculator
app.get("/", function (req, res) {
    //.sendFile() send whatever file is within the parenthesis to the client
    // __dirname is a keyword that allows me to access the current directory and allows me to chain the file path
    res.sendFile(__dirname + "/html/index.html")
})
app.post("/", function (req, res) {
    // req.body grab from the body of the
    let num1 = req.body.n1;
    let num2 = req.body.n2;
    let sum = Number(num1) + Number(num2);
    res.status(200).send(sum.toStrin(g));
});
// bmi Calculator
app.get('/bmiCalculator', (req, res, next) => {
    res.sendFile(__dirname + "/bmiCalculator/bmiCalculator.html")
})
app.post("/bmiCalculator", function (req, res) {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let bmi = weight / (height * height)
    res.send("Your BMI is " + bmi)
})
app.listen(5000, function () {
    console.log("Server started listening on port 5000")
});
