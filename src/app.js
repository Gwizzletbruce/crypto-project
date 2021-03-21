const path = require("path")
const express = require("express")
const hbs = require("hbs")
const snoowrap = require("snoowrap")
const Reddit = require("reddit")
const { title } = require("process")


const app = express()
const port = process.env.PORT || 3000

//paths for express
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../tamplates/partials")

//set up handlebars and views location
app.set("views", viewsPath)
app.set("view Engine", "hbs")
hbs.registerPartials(partialsPath)

//set up static directory
app.use(express.static(path.join(__dirname, "../public")))

//get and render pages

app.get("", (res, req) => {
    res.render("index", {
        title: "Crypto App",
        name: "Luke Nisbet",
        comp: "LUNIS"
    })
})



//********************SNOOWRAP CODE****************** */

const r = new snoowrap({
    userAgent: "Luke Nisbet",
    clientId: "mOM7tyL_Mry0iA",
    clientSecret: "ruk-vRDEwc2i8-A_QxN4GHJ8zCP4Nw",
    refreshToken: "25504889-XI-AA-RwvPZUrh_XUlmoa_1YOi0Mtw"
})


const getSub = async (sub, callback) => {
     
        const subreddit = await sub.getSubreddit("CryptoCurrency")
        const topPosts = await subreddit.getTop({time: "day", limit: 10})
        topPostId = []
        
        coins = ["bitcoin", "ethereum", "litecoin", "cardano", "polkadot", "stellar", "binance coin", "monero", "xmr",  "chainlink", "dot", "bnb", "tether", "btc", "eth", "dot", "ada", "ltc", "xlm", ]

        subToSearch = "input"

        topPosts.forEach(post => {
            topPostId.push({
                id: post.id,
            })
        })

        console.log(topPostId)

        sub.getSubmission(JSON.stringify(topPostId[0].toString())).fetch().then( commentInfo => {
            console.log(commentInfo.name)
            console.log(commentInfo.comments[2].body)

    
            for (i = 0; i< topPostId.length; i++) {

            }

        })
        
        

        

        
        // const keywords = ["bitcoin", "ethereum", "nano", "litecoin", "ada", "stellar"]
        // const titleText = data.title


        // for (i=0; i< keywords.length; i++ ) {
        //     if (titleText.search(keywords[i])) {
        //         console.log("found")
        //     } else {
        //         console.log("not found")
        //     }
        // }
        
        console.log(coins)

    
    }
        



getSub(r, (error, body) => {
    if (error) {
        console.log("error")
    } else {
        return console.log( body.comments)
        
    }

})


    
    
    
        //     if (titleText.search(keywords[i] = true) {
    //         console.log("Found")
    //     } 
    //         console.log("Not Found")
    //     }
    
    // }

        
           

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




// app.listen(port, () => {
//     console.log("Server is up on port 3000")
// })