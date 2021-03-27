const path = require("path")
const algo = require("../public/js/algorithm.js")
const Highchart = require("../public/js/highchart")
const express = require("express")
const hbs = require("hbs")
const snoowrap = require("snoowrap")
const Reddit = require("reddit")
const { title } = require("process")
var chart = require("chart.js")


const app = express()
const port = process.env.PORT || 3000

//paths for express
const viewsPath = path.join(__dirname, "../src/templates/views")
const partialsPath = path.join(__dirname, "../src/templates/partials")

//set up handlebars and views location
app.set("views", viewsPath)
app.set("view engine", "hbs")
hbs.registerPartials(partialsPath)

//set up static directory
app.use(express.static(path.join(__dirname, "../public")))

//get and render pages


app.get("", (req, res, next) => {
    res.render("index", {
        title: "Crypto App",
        name: "Luke Nisbet",
        comp: "LUNIS",
        //algorithm variable from algorithm file passed through to client side to be used i chart script
        algo: JSON.stringify(algo)
        
    })
   

})

app.listen(port, () => {
    console.log("Server is up on port 3000")
})
