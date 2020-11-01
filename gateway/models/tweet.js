
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.TWITTER_API_KEY,
  consumer_secret: process.env.TWITTER_SECRET_KEY,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_TOKEN_SECRET
});

module.exports = {
  getTweetMetrics: function(tweetLink) {
    // https://twitter.com/SalsaTekila/status/1321889873675112449
    const tweetID = tweetLink.split("/").pop();
    return new Promise(function(resolve, reject){
      

    
    client.get('statuses/show', {id: tweetID}, function(error, tweets, response) {
       resolve(tweets);
    });
    
    });
  }
}