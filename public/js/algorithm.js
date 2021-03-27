
var unique = require("uniq")
const jquery = require("../js/jquery.js")
const requirejs = require("../js/require.js")
const r = require("../js/snoowrap")
const Reddit = require("reddit")
const { title } = require("process")
var chart = require("chart.js")


//emmpty arrays for trawled comments
const commentData = []
const commentInfo = ""

//arrays for standard coin phrases and acronym- used to search through comments to find matches
coinsStand = ["bitcoin", "ethereum", "litecoin", "cardano", "polkadot", "stellar", "binance coin", "monero",   "chainlink",  ]
coinsAcro = ["dot", "bnb", "tether", "btc", "eth", "dot", "ada", "ltc", "xlm","xmr",]
const coinsCountStandard = []
const coinsCountAcro = []
subToSearch = "CryptoCurrency"


//gets subreddit using String input, will change to variable input in future possibly
const getSubreddit = async (sub, callback) => {
     
        const subreddit = await sub.getSubreddit("CryptoCurrency")
        console.log("get sub here")
        return subreddit
        
        
}

//


//async function to get top posts of sub reddit that is in the subTOSearch variable, with options to limit the amount of posts and the time frame
const getTopPosts = async (sub, callback) => {

    const topPostID = []
    const topPosts = await sub.getSubreddit(subToSearch).getHot({time: "day", limit: 100})
    console.log("top posts here")


    //pushes post IDs for top 10 posts into an array
    for (x=0; x< 10; x++) {
        topPostID.push(topPosts[x].id)
        
        getSubmissions(topPostID[x])
            
        }
    
            
            console.log(topPostID)
    
           
            
    
    
    

}

// async fetching of comments from each top comment, comments are put into an array to be trawled through later
const getSubmissions = (sub, callback) => {
    
        r.getSubmission(sub).fetch().then( commentInfo => {
            for (i = 0; i < 20; i++) {
                commentData.push(commentInfo.comments[i].body)
            }

            var countStand = 0
            var countAcro = 0
            
            for (y = 0; y < commentData.length - 1; y++) {
            
                for (z = 0; z <= 7; z++) {
                    if (commentData[y].includes(coinsStand[z])) {
                        countStand += 1
                        coinsCountStandard.splice(z, 1, countStand)
        
                    } 
                    else if (commentData[y].includes(coinsAcro[z])) {
                        countAcro += 1
                        coinsCountAcro.splice(z, 1, countAcro)

                }
                  
            }
            
            }
            // console.log("Standard")
            // console.log(coinsCountStandard)
            // console.log("Acronym")
            // console.log(coinsCountAcro)

            
        })

    }

const topPostId = []
console.log(topPostId)

getSubreddit(r, (error, body) => {
    console.log("here")
})

getTopPosts(r, (error, body) => {
    
})
    



       
module.exports = {
    acronymn: coinsCountAcro,
    standard: coinsCountStandard
}


