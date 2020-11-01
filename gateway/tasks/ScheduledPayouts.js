var schedule = require('node-schedule');
var Campaign = require('../schema/Campaign');
var Tweet = require('../models/tweet');
var PaymentModel = require('../models/payment');





module.exports = {
 startScheduledPayout: function() {
   console.log('starting payouts');
   
    var j = schedule.scheduleJob('*/1 * * * *', function(){
      Campaign.find({}).then(function(campaignList){
        campaignList.forEach(function(campaign){
          let marketerUpdateIndex = 0;
          campaign.marketers.forEach(function(marketer, mIdx){
            Tweet.getTweetMetrics(marketer.campaignLink).then(function(twitterMetricResponse){
              

            // Perform instant distribution
            const fromAccount = campaign.publisherWalletAddress;
            const toAccount = marketer.userAddress;
            campaign.lastPayment = new Date();
            const previousLikeCount = !isNaN(marketer.favorite_count) ? parseInt(marketer.favorite_count) : 0;
            const previousRetweetCount = !isNaN(marketer.retweet_count) ? parseInt(marketer.retweet_count) : 0;
            const newLikeCount = parseInt(twitterMetricResponse.favorite_count);
            const newRetweetCount = parseInt(twitterMetricResponse.retweet_count);

            
            const likeDiff = newLikeCount - previousLikeCount;

            const retweetDiff = newRetweetCount - previousRetweetCount;
            let likePayout = 0;
            let retweetPayout = 0;
            
            if (likeDiff > 0) {
              likePayout = newLikeCount * parseInt(campaign.likePayout);
            }
            
            if (retweetDiff > 0) {
              retweetPayout = newRetweetCount * parseInt(campaign.retweetPayout);
            }

            let totalPayout = (likePayout + retweetPayout);

            let previousPayout = parseInt(campaign.previous_payout);

            if (!isNaN(previousPayout)) {
              totalPayout = totalPayout + previousPayout;
            }
            console.log("Total payout "+totalPayout);
            console.log("Previous payout "+marketer.previous_payout);
            
            if (Number(totalPayout) > Number(marketer.previous_payout)) {
            PaymentModel.performInstantDistribution(fromAccount, toAccount, totalPayout).then(function(response){

            marketer.previous_payout = totalPayout;
            marketer.favorite_count = twitterMetricResponse.favorite_count;
            marketer.retweet_count = twitterMetricResponse.retweet_count;
            campaign.marketers[mIdx] = marketer;
            marketerUpdateIndex ++;
            
            if (marketerUpdateIndex === campaign.marketers.length) {
              campaign.save({});
            }
              console.log("Finish perform instant distribution");
            })
            }
          })
          }); 
          
        })
      })
    });

 } 
}