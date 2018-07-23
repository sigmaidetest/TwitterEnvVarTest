let AWS = require('aws-sdk');
let SL_TWITTER = require('slappforge-sdk-twitter');
let twitterClients = require('./TwitterClients');
const twitter = new SL_TWITTER.TwitterP(twitterClients);

exports.handler = function (event, context, callback) {

    console.log("CT", process.env.TWITTER_twClient_consumerKey);
    console.log("CS", process.env.TWITTER_twClient_consumerSecret);
    console.log("AT", process.env.TWITTER_twClient_accessToken);
    console.log("AS", process.env.TWITTER_twClient_accessTokenSecret);

    twitter.searchTweets({
        "searchParams": {
            "q": "sw",
            "count": 100
        },
        "clientName": "twClient"
    }).then(response => {
        let data = response.data;
    }).catch(err => {
        console.log(err);
    });



    console.log("My Env Var", process.env.MyVar);
    callback(null, 'Successfully executed');
}