const path = require("path")
const algo = require("../public/js/algorithm.js")
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





//********************SNOOWRAP CODE****************** */

// const r = new snoowrap({
//     userAgent: "Luke Nisbet",
//     clientId: "mOM7tyL_Mry0iA",
//     clientSecret: "ruk-vRDEwc2i8-A_QxN4GHJ8zCP4Nw",
//     refreshToken: "25504889-XI-AA-RwvPZUrh_XUlmoa_1YOi0Mtw"
// })

// const commentData = []
// const commentInfo = ""
// coinsStand = ["bitcoin", "ethereum", "litecoin", "cardano", "polkadot", "stellar", "binance coin", "monero",   "chainlink",  ]
// coinsAcro = ["dot", "bnb", "tether", "btc", "eth", "dot", "ada", "ltc", "xlm","xmr",]
// const coinsCountStandard = []
// const coinsCountAcro = []
// subToSearch = "CryptoCurrency"



// const getSubreddit = async (sub, callback) => {
     
//         const subreddit = await sub.getSubreddit("CryptoCurrency")
//         console.log("get sub here")
//         return subreddit
        
        
// }

// const getTopPosts = async (sub, callback) => {

//     const topPostID = []
//     const topPosts = await sub.getSubreddit(subToSearch).getHot({time: "day", limit: 100})
//     console.log("top posts here")

//     for (x=0; x< 10; x++) {
//         topPostID.push(topPosts[x].id)
        
//         getSubmissions(topPostID[x])
            
//         }
    
            
//             console.log(topPostID)
    
           
            
    
    
    

// }
// const getSubmissions = (sub, callback) => {
    
//         r.getSubmission(sub).fetch().then( commentInfo => {
//             for (i = 0; i < 20; i++) {
//                 commentData.push(commentInfo.comments[i].body)
//             }

//             var countStand = 0
//             var countAcro = 0
            
//             for (y = 0; y < commentData.length - 1; y++) {
            
//                 for (z = 0; z <= 7; z++) {
//                     if (commentData[y].includes(coinsStand[z])) {
//                         countStand += 1
//                         coinsCountStandard.splice(z, 1, countStand)
        
//                     } 
//                     else if (commentData[y].includes(coinsAcro[z])) {
//                         countAcro += 1
//                         coinsCountAcro.splice(z, 1, countAcro)

//                 }
                  
//             }
            
//             }
//             console.log("Standard")
//             console.log(coinsCountStandard)
//             console.log("Acronym")
//             console.log(coinsCountAcro)
//         })

//     }

// const topPostId = []
// console.log(topPostId)

// getSubreddit(r, (error, body) => {
//     console.log("here")
// })

// getTopPosts(r, (error, body) => {
    
// })
      
       
module.exports = coinsAcro, coinsStand

        
           

//************END SNOOWRAP CODE ****************** */

//****************NPM REDDIT CODE******************* */

// const reddit = new Reddit({
//     username: "Luke78910",
//     password: "skillakins",
//     appId: "Ufc816fKtZaoYw",
//     appSecret: "luYOsmLc5gjOJ1YVllL81nfoZTZnJg",
//     userAgent: "Crypto Web App v2/1.0.0 (http://localhost:3000)"

// })

// const getSub = async (r, callback) => {
//     const res = await r.get("/api/v1/me.json?limit=25").then()
//     return res
// }

// const result = getSub(reddit, (error, body) => {
//     if (error) {
//         console.log("error")

//     } else {
//         console.log(body)
//     }
// })

// console.log(Promise.resolve(result))


app.get("", (req, res) => {
    res.render("index", {
        title: "Crypto App",
        name: "Luke Nisbet",
        comp: "LUNIS"
    })
})

app.listen(port, () => {
    console.log("Server is up on port 3000")
})
