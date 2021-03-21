const path = require("path")
const express = require("express")
const hbs = require("hbs")
const snoowrap = require("snoowrap")
const Reddit = require("reddit")


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

// const r = new snoowrap({
//     userAgent: "Luke Nisbet",
//     clientId: "mOM7tyL_Mry0iA",
//     clientSecret: "ruk-vRDEwc2i8-A_QxN4GHJ8zCP4Nw",
//     refreshToken: "25504889-XI-AA-RwvPZUrh_XUlmoa_1YOi0Mtw"
// })


// const getSub = async (sub, callback) => {
     
//         const subreddit = await sub.getSubreddit("CryptoCurrency")
//         //const topPosts = await subreddit.getTop({time: "day", limit:15})
//         const post1 = await r.getHot().map(post => post.title).then(console.log)

//         data = []
//         console.log(post1)
//         post1.forEach((post) => {
//             data.push({
//                 id: post.id,
//                 link: post.url,
//                 text: post.title,
//                 score: post.score,
//                 comments: post.comments
//             })
            
//         })
        
//         return console.log(data)

    
//     }
        



// getSub(r, (error, body) => {
//     if (error) {
//         console.log("error")
//     } else {
//         return console.log( body.comments)
        
//     }

// })
           

//************END SNOOWRAP CODE ****************** */

const reddit = new Reddit({
    username: "Luke78910",
    password: "skillakins",
    appId: "Ufc816fKtZaoYw",
    appSecret: "luYOsmLc5gjOJ1YVllL81nfoZTZnJg",
    userAgent: "Crypto Web App v2/1.0.0 (http://localhost:3000)"

})

const getSub = async (r, callback) => {
    const res = await r.get("/r/CryptoCurrency/new")
    return res
}

getSub(reddit, (error, body) => {
    if (error) {
        console.log("error")

    } else {
        console.log(body)
    }
})

console.log("end")



app.listen(port, () => {
    console.log("Server is up on port 3000")
})